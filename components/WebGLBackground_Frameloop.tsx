'use client'

import { useRef, useMemo, forwardRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useFBO } from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'
import { Effect } from 'postprocessing'
import * as THREE from 'three'

// Debug logging utility (disabled for production)
const log = {
  info: () => {},
  success: () => {},
  warn: () => {},
  error: () => {},
  perf: () => {},
}

// Periodic noise function - EXACT from original
const periodicNoiseFunction = `
  // Periodic noise function using sine and cosine waves
  float periodicNoise(vec3 p, float time) {
    // Create multiple frequency components for more complex movement
    // All time multipliers are integer values to ensure perfect 2π periodicity
    float noise = 0.0;

    // Primary wave - period = 2π
    noise += sin(p.x * 2.0 + time) * cos(p.z * 1.5 + time);

    // Secondary wave - period = π (time * 2)
    noise += sin(p.x * 3.2 + time * 2.0) * cos(p.z * 2.1 + time) * 0.6;

    // Tertiary wave - period = 2π/3 (time * 3)
    noise += sin(p.x * 1.7 + time) * cos(p.z * 2.8 + time * 3.0) * 0.4;

    // Cross-frequency interaction - period = π (time * 2)
    noise += sin(p.x * p.z * 0.5 + time * 2.0) * 0.3;

    return noise * 0.3; // Scale down the result
  }
`

// Simulation Material - EXACT from original
class SimulationMaterial extends THREE.ShaderMaterial {
  constructor(planeScale = 10) {
    log.info('Creating SimulationMaterial...')
    const size = 512
    const particleCount = size * size
    log.info(`Particle grid size: ${size}x${size} = ${particleCount.toLocaleString()} particles`)

    const data = new Float32Array(size * size * 4)
    log.info(`Float32Array size: ${(data.byteLength / 1024).toFixed(2)} KB`)

    for (let i = 0; i < size * size; i++) {
      const x = (i % size) / (size - 1)
      const y = Math.floor(i / size) / (size - 1)
      data[i * 4 + 0] = (x - 0.5) * 2 * planeScale
      data[i * 4 + 1] = 0
      data[i * 4 + 2] = (y - 0.5) * 2 * planeScale
      data[i * 4 + 3] = 1
    }

    const positionsTexture = new THREE.DataTexture(
      data,
      size,
      size,
      THREE.RGBAFormat,
      THREE.FloatType
    )
    positionsTexture.needsUpdate = true
    log.success(`Position texture created: ${size}x${size} RGBA Float`)

    super({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D positions;
        uniform float uTime;
        uniform float uNoiseScale;
        uniform float uNoiseIntensity;
        uniform float uTimeScale;
        uniform float uLoopPeriod;
        varying vec2 vUv;

        ${periodicNoiseFunction}

        void main() {
          // Get the original particle position
          vec3 originalPos = texture2D(positions, vUv).rgb;

          // Use continuous time that naturally loops through sine/cosine periodicity
          float continuousTime = uTime * uTimeScale * (6.28318530718 / uLoopPeriod);

          // Scale position for noise input
          vec3 noiseInput = originalPos * uNoiseScale;

          // Generate periodic displacement for each axis using different phase offsets
          float displacementX = periodicNoise(noiseInput + vec3(0.0, 0.0, 0.0), continuousTime);
          float displacementY = periodicNoise(noiseInput + vec3(50.0, 0.0, 0.0), continuousTime + 2.094); // +120°
          float displacementZ = periodicNoise(noiseInput + vec3(0.0, 50.0, 0.0), continuousTime + 4.188); // +240°

          // Apply distortion to original position
          vec3 distortion = vec3(displacementX, displacementY, displacementZ) * uNoiseIntensity;
          vec3 finalPos = originalPos + distortion;

          gl_FragColor = vec4(finalPos, 1.0);
        }
      `,
      uniforms: {
        positions: { value: positionsTexture },
        uTime: { value: 0 },
        uNoiseScale: { value: 1 },
        uNoiseIntensity: { value: 0.52 },
        uTimeScale: { value: 1 },
        uLoopPeriod: { value: 24 }
      }
    })
  }
}

// Particles Material - EXACT from original
class ParticlesMaterial extends THREE.ShaderMaterial {
  constructor() {
    log.info('Creating ParticlesMaterial...')
    super({
      vertexShader: `
        uniform sampler2D positions;
        uniform sampler2D initialPositions;
        uniform float uTime;
        uniform float uFocus;
        uniform float uFov;
        uniform float uBlur;
        uniform float uPointSize;
        varying float vDistance;
        varying float vPosY;
        varying vec3 vWorldPosition;
        varying vec3 vInitialPosition;

        void main() {
          vec3 pos = texture2D(positions, position.xy).xyz;
          vec3 initialPos = texture2D(initialPositions, position.xy).xyz;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          vDistance = abs(uFocus - -mvPosition.z);
          vPosY = pos.y;
          vWorldPosition = pos;
          vInitialPosition = initialPos;
          gl_PointSize = max(vDistance * uBlur * uPointSize, 3.0);
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        uniform float uRevealFactor;
        uniform float uRevealProgress;
        uniform float uTime;
        varying float vDistance;
        varying float vPosY;
        varying vec3 vWorldPosition;
        varying vec3 vInitialPosition;
        uniform float uTransition;

        ${periodicNoiseFunction}

        // Sparkle noise function for subtle brightness variations
        float sparkleNoise(vec3 seed, float time) {
          // Use initial position as seed for consistent per-particle variation
          float hash = sin(seed.x * 127.1 + seed.y * 311.7 + seed.z * 74.7) * 43758.5453;
          hash = fract(hash);

          // Slow time variation (time / 10) for gentle sparkle effect
          float slowTime = time * 1.0;

          // Create sparkle pattern using multiple sine waves with the hash as phase offset
          float sparkle = 0.0;
          sparkle += sin(slowTime + hash * 6.28318) * 0.5;
          sparkle += sin(slowTime * 1.7 + hash * 12.56636) * 0.3;
          sparkle += sin(slowTime * 0.8 + hash * 18.84954) * 0.2;

          // Create a different noise pattern to reduce sparkle frequency
          // Using different hash for uncorrelated pattern
          float hash2 = sin(seed.x * 113.5 + seed.y * 271.9 + seed.z * 97.3) * 37849.3241;
          hash2 = fract(hash2);

          // Static spatial mask to create sparse sparkles (no time dependency)
          float sparkleMask = sin(hash2 * 6.28318) * 0.7;
          sparkleMask += sin(hash2 * 12.56636) * 0.3;

          // Only allow sparkles when mask is positive (reduces frequency by ~70%)
          if (sparkleMask < 0.3) {
            sparkle *= 0.05; // Heavily dampen sparkle when mask is low
          }

          // Map sparkle to brightness with smooth exponential emphasis on high peaks only
          float normalizedSparkle = (sparkle + 1.0) * 0.5; // Convert [-1,1] to [0,1]

          // Create smooth curve: linear for low values, exponential for high values
          // Using pow(x, n) where n > 1 creates a curve that's nearly linear at low end, exponential at high end
          float smoothCurve = pow(normalizedSparkle, 4.0); // High exponent = dramatic high-end emphasis

          // Blend between linear (for low values) and exponential (for high values)
          float blendFactor = normalizedSparkle * normalizedSparkle; // Smooth transition weight
          float finalBrightness = mix(normalizedSparkle, smoothCurve, blendFactor);

          // Map to brightness range [0.7, 2.0] - conservative range with exponential peaks
          return 0.7 + finalBrightness * 1.3;
        }

        float sdCircle(vec2 p, float r) {
          return length(p) - r;
        }

        void main() {
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;

          // Define triangle vertices (equilateral triangle)
          vec2 p0 = vec2(0.0, -0.8);     // top tip (flipped Y)
          vec2 p1 = vec2(-0.7, 0.4);     // bottom left (flipped Y)
          vec2 p2 = vec2(0.7, 0.4);      // bottom right (flipped Y)

          float sdf = sdCircle(cxy, 0.5);

          if (sdf > 0.0) discard;

          // Calculate distance from center for reveal effect
          float distanceFromCenter = length(vWorldPosition.xz);

          // Add noise to the reveal threshold for organic edge
          float noiseValue = periodicNoise(vInitialPosition * 4.0, 0.0);
          float revealThreshold = uRevealFactor + noiseValue * 0.3;

          // Create reveal mask based on distance from center (inverted for proper reveal)
          float revealMask = 1.0 - smoothstep(revealThreshold - 0.2, revealThreshold + 0.1, distanceFromCenter);

          // Calculate sparkle brightness multiplier
          float sparkleBrightness = sparkleNoise(vInitialPosition, uTime);

          float alpha = (1.04 - clamp(vDistance, 0.0, 1.0)) * clamp(smoothstep(-0.5, 0.25, vPosY), 0.0, 1.0) * uOpacity * revealMask * uRevealProgress * sparkleBrightness;

          // Primary color: #5a0e27 = rgb(90, 14, 39) = (0.353, 0.055, 0.153)
          // Secondary color: #7193bd = rgb(113, 147, 189) = (0.443, 0.576, 0.741)
          vec3 primaryColor = vec3(0.353, 0.055, 0.153);
          vec3 secondaryColor = vec3(0.443, 0.576, 0.741);

          // Create color variation based on position and sparkle
          float colorMix = (sin(vInitialPosition.x * 3.0 + uTime * 0.5) * 0.5 + 0.5) * sparkleBrightness;
          vec3 particleColor = mix(primaryColor, secondaryColor, colorMix);

          // Brighten the color for visibility (original value)
          particleColor *= 2.5;

          gl_FragColor = vec4(particleColor, mix(alpha, sparkleBrightness - 1.1, uTransition));
        }
      `,
      uniforms: {
        positions: { value: null },
        initialPositions: { value: null },
        uTime: { value: 0 },
        uFocus: { value: 3.8 },
        uFov: { value: 50 },
        uBlur: { value: 1.79 },
        uTransition: { value: 0 },
        uPointSize: { value: 10 },
        uOpacity: { value: 0.8 },
        uRevealFactor: { value: 0 },
        uRevealProgress: { value: 0 }
      },
      transparent: true,
      depthWrite: false
    })
  }
}

// Particle System Component
function ParticleSystem() {
  const size = 512
  const simulationMaterialRef = useRef<SimulationMaterial>()
  const particlesMaterialRef = useRef<ParticlesMaterial>()
  const startTimeRef = useRef<number | null>(null)
  const frameCountRef = useRef(0)
  const lastFPSCheckRef = useRef(0)
  const revealLoggedRef = useRef({
    started: false,
    at25: false,
    at50: false,
    at75: false,
    completed: false
  })
  const totalFramesRef = useRef(0)
  const slowFramesRef = useRef(0)
  const criticalFramesRef = useRef(0)

  // Component lifecycle logging
  useEffect(() => {
    log.info('🚀 ParticleSystem component mounted')
    const startTime = performance.now()

    return () => {
      const duration = performance.now() - startTime
      log.info('═══════════════════════════════════════════════')
      log.info('📊 PERFORMANCE SUMMARY')
      log.info('═══════════════════════════════════════════════')
      log.info(`⏱️  Total runtime: ${(duration / 1000).toFixed(2)}s`)
      log.info(`🎬 Total frames rendered: ${totalFramesRef.current}`)
      log.info(`⚠️  Slow frames (>16.67ms): ${slowFramesRef.current} (${((slowFramesRef.current / totalFramesRef.current) * 100).toFixed(1)}%)`)
      log.info(`❌ Critical frames (>33.33ms): ${criticalFramesRef.current} (${((criticalFramesRef.current / totalFramesRef.current) * 100).toFixed(1)}%)`)
      log.info(`✅ Good frames: ${totalFramesRef.current - slowFramesRef.current} (${(((totalFramesRef.current - slowFramesRef.current) / totalFramesRef.current) * 100).toFixed(1)}%)`)
      log.info(`📈 Average FPS: ${(totalFramesRef.current / (duration / 1000)).toFixed(1)}`)
      log.info('═══════════════════════════════════════════════')
      log.info(`🔴 ParticleSystem component unmounted`)
    }
  }, [])

  // FBO for GPU simulation
  const fbo = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType
  })

  useEffect(() => {
    log.success(`FBO created: ${fbo.width}x${fbo.height}`)
  }, [fbo])

  // Simulation quad
  const simulationMaterial = useMemo(() => {
    log.info('useMemo: Creating SimulationMaterial instance')
    const mat = new SimulationMaterial(10)
    log.success('SimulationMaterial instance created')
    return mat
  }, [])

  const particlesMaterial = useMemo(() => {
    log.info('useMemo: Creating ParticlesMaterial instance')
    const mat = new ParticlesMaterial()
    log.success('ParticlesMaterial instance created')
    return mat
  }, [])

  simulationMaterialRef.current = simulationMaterial
  particlesMaterialRef.current = particlesMaterial

  // Particle positions
  const positions = useMemo(() => {
    log.info('useMemo: Generating particle positions...')
    const count = size * size
    const pos = new Float32Array(count * 3)
    log.info(`Position buffer: ${count.toLocaleString()} particles × 3 = ${(pos.byteLength / 1024).toFixed(2)} KB`)

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (i % size) / size
      pos[i * 3 + 1] = Math.floor(i / size) / size
      pos[i * 3 + 2] = 0
    }

    log.success('Particle positions generated')
    return pos
  }, [size])

  // Orthographic camera for simulation
  const simScene = useMemo(() => {
    log.info('Creating simulation scene')
    return new THREE.Scene()
  }, [])

  const simCamera = useMemo(() => {
    log.info('Creating orthographic camera for simulation')
    return new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / 0x20000000000000, 1)
  }, [])

  const simQuad = useMemo(() => {
    log.info('Creating simulation quad geometry')
    const geo = new THREE.BufferGeometry()
    const vertices = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0])
    const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0])
    geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
    log.success('Simulation quad created')
    return new THREE.Mesh(geo, simulationMaterial)
  }, [simulationMaterial])

  useEffect(() => {
    simScene.add(simQuad)
    log.success('Simulation quad added to scene')
  }, [simScene, simQuad])

  useFrame((state) => {
    const { gl, clock } = state
    const frameStartTime = performance.now()

    // Initialize start time
    if (startTimeRef.current === null) {
      startTimeRef.current = clock.elapsedTime
      log.info('🎬 Animation started!')
    }

    // FPS monitoring (every second)
    frameCountRef.current++
    const currentTime = clock.elapsedTime
    if (currentTime - lastFPSCheckRef.current >= 1.0) {
      const fps = frameCountRef.current / (currentTime - lastFPSCheckRef.current)

      // FPS analysis
      if (fps < 30) {
        log.error(`FPS: ${fps.toFixed(1)} ❌ CRITICAL LAG | Frame: ${frameCountRef.current} | Time: ${currentTime.toFixed(2)}s`)
      } else if (fps < 45) {
        log.warn(`FPS: ${fps.toFixed(1)} ⚠️  LOW | Frame: ${frameCountRef.current} | Time: ${currentTime.toFixed(2)}s`)
      } else if (fps > 90) {
        log.info(`FPS: ${fps.toFixed(1)} 🚀 HIGH (tab inactive?) | Frame: ${frameCountRef.current} | Time: ${currentTime.toFixed(2)}s`)
      } else {
        log.perf(`FPS: ${fps.toFixed(1)} ✅ GOOD | Frame: ${frameCountRef.current} | Time: ${currentTime.toFixed(2)}s`)
      }

      frameCountRef.current = 0
      lastFPSCheckRef.current = currentTime
    }

    // Calculate reveal animation (3.5 seconds duration)
    const timeSinceStart = clock.elapsedTime - startTimeRef.current
    const revealDuration = 3.5
    const rawProgress = Math.min(timeSinceStart / revealDuration, 1)
    const revealProgress = 1 - Math.pow(1 - rawProgress, 3) // Ease out cubic

    // Log reveal progress milestones (sadece bir kere)
    if (rawProgress === 0 && !revealLoggedRef.current.started) {
      log.info('🎭 Reveal animation: 0% (starting)')
      revealLoggedRef.current.started = true
    } else if (rawProgress >= 0.25 && !revealLoggedRef.current.at25) {
      log.info('🎭 Reveal animation: 25%')
      revealLoggedRef.current.at25 = true
    } else if (rawProgress >= 0.5 && !revealLoggedRef.current.at50) {
      log.info('🎭 Reveal animation: 50%')
      revealLoggedRef.current.at50 = true
    } else if (rawProgress >= 0.75 && !revealLoggedRef.current.at75) {
      log.info('🎭 Reveal animation: 75%')
      revealLoggedRef.current.at75 = true
    } else if (rawProgress >= 1.0 && !revealLoggedRef.current.completed) {
      log.success('🎭 Reveal animation: 100% (complete!)')
      revealLoggedRef.current.completed = true
    }

    // Update simulation - EXACT parameters from original
    simulationMaterial.uniforms.uTime.value = clock.elapsedTime
    simulationMaterial.uniforms.uNoiseScale.value = 0.6
    simulationMaterial.uniforms.uNoiseIntensity.value = 0.52
    simulationMaterial.uniforms.uTimeScale.value = 1.0

    // Render to FBO
    const fboRenderStart = performance.now()
    gl.setRenderTarget(fbo)
    gl.clear()
    gl.render(simScene, simCamera)
    gl.setRenderTarget(null)
    const fboRenderTime = performance.now() - fboRenderStart

    // Update particles material
    particlesMaterial.uniforms.positions.value = fbo.texture
    particlesMaterial.uniforms.initialPositions.value = simulationMaterial.uniforms.positions.value
    particlesMaterial.uniforms.uTime.value = clock.elapsedTime
    particlesMaterial.uniforms.uRevealFactor.value = 4 * revealProgress
    particlesMaterial.uniforms.uRevealProgress.value = revealProgress

    // Frame timing (only log if slow)
    const frameTime = performance.now() - frameStartTime
    totalFramesRef.current++

    if (frameTime > 33.33) { // Slower than 30fps
      criticalFramesRef.current++
      slowFramesRef.current++
      log.error(`⏱️⏱️  VERY SLOW FRAME: ${frameTime.toFixed(2)}ms (target: 16.67ms for 60fps)`)
    } else if (frameTime > 16.67) { // Slower than 60fps (16.67ms)
      slowFramesRef.current++
      const fboPercent = ((fboRenderTime / frameTime) * 100).toFixed(1)
      log.warn(`⏱️  Slow frame: ${frameTime.toFixed(2)}ms total (FBO: ${fboRenderTime.toFixed(2)}ms = ${fboPercent}%)`)
    }
  })

  return (
    <points material={particlesMaterial}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
    </points>
  )
}

// Vignette Effect - EXACT from original
const vignetteFragmentShader = `
uniform float darkness;
uniform float offset;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  // Calculate distance from center
  vec2 centeredUv = (uv - 0.5) * 2.0;
  float dist = dot(centeredUv, centeredUv);

  // Create vignette effect
  float vignette = 1.0 - smoothstep(offset, offset + darkness, dist);

  outputColor = vec4(inputColor.rgb * vignette, inputColor.a);
}
`

class VignetteEffect extends Effect {
  constructor({ darkness = 1, offset = 1 } = {}) {
    log.info(`Creating VignetteEffect (darkness: ${darkness}, offset: ${offset})`)
    super('VignetteEffect', vignetteFragmentShader, {
      uniforms: new Map([
        ['darkness', new THREE.Uniform(darkness)],
        ['offset', new THREE.Uniform(offset)]
      ])
    })
    log.success('VignetteEffect created')
  }
}

// Vignette Component
interface VignetteProps {
  darkness?: number
  offset?: number
}

const Vignette = forwardRef<unknown, VignetteProps>(({ darkness = 1, offset = 1 }, ref) => {
  const effect = useMemo(() => new VignetteEffect({ darkness, offset }), [darkness, offset])
  return <primitive ref={ref} object={effect} dispose={null} />
})

Vignette.displayName = 'Vignette'

export default function WebGLBackground() {
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    log.info('═══════════════════════════════════════════════')
    log.info('🎨 WebGLBackground component mounted')
    log.info('═══════════════════════════════════════════════')

    // Device info
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1
    const actualDpr = Math.min(dpr, 1.5)
    log.info(`🖥️  Device Pixel Ratio: ${dpr} (capped at ${actualDpr})`)
    log.info(`📐 Window size: ${typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'N/A'}`)

    // WebGL capability check
    if (typeof window !== 'undefined') {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
      if (gl) {
        const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
        if (debugInfo) {
          const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
          const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
          log.info(`🎮 GPU Vendor: ${vendor}`)
          log.info(`🎮 GPU Renderer: ${renderer}`)

          // Intel GPU uyarısı
          if (renderer.includes('Intel') && renderer.includes('UHD')) {
            log.warn('⚠️⚠️⚠️ INTEGRATED GPU DETECTED ⚠️⚠️⚠️')
            log.warn('Intel UHD Graphics - 262K particles may cause FPS drops!')
            log.warn('Performance may vary. Consider reducing particle count for production.')
          }
        }
        log.info(`✅ WebGL Version: ${gl.getParameter(gl.VERSION)}`)
        log.info(`✅ GLSL Version: ${gl.getParameter(gl.SHADING_LANGUAGE_VERSION)}`)
        log.info(`📊 Max Texture Size: ${gl.getParameter(gl.MAX_TEXTURE_SIZE)}`)
      } else {
        log.error('❌ WebGL not supported!')
      }
    }

    // Intersection Observer - viewport visibility tracking with debounce
    let visibilityChangeCount = 0
    let debounceTimer: NodeJS.Timeout | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const nowVisible = entry.isIntersecting

          // Debounce visibility changes to prevent rapid toggling
          if (debounceTimer) {
            clearTimeout(debounceTimer)
          }

          debounceTimer = setTimeout(() => {
            setIsVisible((prev) => {
              if (prev !== nowVisible) {
                visibilityChangeCount++
                if (nowVisible) {
                  log.success(`👁️  Background NOW VISIBLE - Resuming render (change #${visibilityChangeCount})`)
                } else {
                  log.warn(`🙈 Background HIDDEN - Pausing render to save GPU (change #${visibilityChangeCount})`)
                }
              }

              return nowVisible
            })
          }, 150) // 150ms debounce
        })
      },
      {
        threshold: 0.3, // 30% görünür olmalı (daha az hassas)
        rootMargin: '0px' // Tam viewport sınırında (50px yerine)
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
      log.info('👁️  Intersection Observer initialized')
    }

    const startTime = performance.now()

    return () => {
      const duration = performance.now() - startTime

      // Cleanup
      if (debounceTimer) {
        clearTimeout(debounceTimer)
      }
      observer.disconnect()

      log.info('═══════════════════════════════════════════════')
      log.info(`🔴 WebGLBackground unmounted (lived for ${(duration / 1000).toFixed(2)}s)`)
      log.info('═══════════════════════════════════════════════')
    }
  }, [])

  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.5) : 1

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden'
      }}
    >
      <Canvas
        dpr={dpr}
        camera={{
          position: [1.2629783123314589, 2.664606471394044, -1.8178993743288914],
          fov: 50,
          near: 0.01,
          far: 300
        }}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance', // GPU'ya öncelik ver
          stencil: false, // Kullanılmayan özellikleri kapat
          depth: true
        }}
        performance={{
          min: 0.5, // Düşük FPS'te otomatik optimizasyon
          max: 1,
          debounce: 200 // Resize gibi olaylarda gecikme
        }}
        linear
        frameloop={isVisible ? 'always' : 'never'} // Visibility-based rendering! 🎯
        onCreated={(state) => {
          log.success('🎨 Canvas created!')
          log.info(`Canvas size: ${state.size.width}x${state.size.height}`)
          log.info(`Viewport: ${state.viewport.width.toFixed(2)}x${state.viewport.height.toFixed(2)}`)
          log.info(`Camera: ${state.camera.type}`)
          log.info(`Initial visibility: ${isVisible}`)
        }}
      >
        <color attach="background" args={['#000000']} />
        <ParticleSystem />
        <EffectComposer multisampling={0}>
          <Vignette darkness={1.5} offset={0.4} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}
