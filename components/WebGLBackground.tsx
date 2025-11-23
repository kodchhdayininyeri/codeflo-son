'use client'

import { useRef, useMemo, forwardRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useFBO } from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'
import { Effect } from 'postprocessing'
import * as THREE from 'three'

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
    const size = 512
    const data = new Float32Array(size * size * 4)

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
    positionsTexture.minFilter = THREE.NearestFilter
    positionsTexture.magFilter = THREE.NearestFilter
    positionsTexture.needsUpdate = true

    super({
      vertexShader: `
        precision mediump float; // Lower precision for 10-15% mobile performance gain
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        precision mediump float; // Lower precision for 10-15% mobile performance gain
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
    super({
      vertexShader: `
        precision mediump float; // Lower precision for 10-15% mobile performance gain
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
          gl_PointSize = max(vDistance * uBlur * uPointSize, 3.0); // Balanced size for 341×341 grid
        }
      `,
      fragmentShader: `
        precision mediump float; // Lower precision for 10-15% mobile performance gain
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

          // Primary color: #008cf1 = rgb(0, 140, 241) = (0.0, 0.549, 0.945)
          // Secondary color: #7193bd = rgb(113, 147, 189) = (0.443, 0.576, 0.741)
          vec3 primaryColor = vec3(0.0, 0.549, 0.945);
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
  const fboFrameSkipRef = useRef(0) // FBO throttle counter

  // FBO for GPU simulation
  const fbo = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType
  })

  // Simulation quad
  const simulationMaterial = useMemo(() => new SimulationMaterial(10), [])

  const particlesMaterial = useMemo(() => new ParticlesMaterial(), [])

  simulationMaterialRef.current = simulationMaterial
  particlesMaterialRef.current = particlesMaterial

  // Particle positions
  const positions = useMemo(() => {
    const count = size * size
    const pos = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      pos[i * 3 + 0] = (i % size) / size
      pos[i * 3 + 1] = Math.floor(i / size) / size
      pos[i * 3 + 2] = 0
    }

    return pos
  }, [size])

  // Orthographic camera for simulation
  const simScene = useMemo(() => new THREE.Scene(), [])

  const simCamera = useMemo(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / 0x20000000000000, 1), [])

  const simQuad = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const vertices = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0])
    const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0])
    geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
    return new THREE.Mesh(geo, simulationMaterial)
  }, [simulationMaterial])

  useEffect(() => {
    simScene.add(simQuad)
  }, [simScene, simQuad])

  useFrame((state) => {
    const { gl, clock } = state

    // Initialize start time
    if (startTimeRef.current === null) {
      startTimeRef.current = clock.elapsedTime
    }

    // Calculate reveal animation (3.5 seconds duration)
    const timeSinceStart = clock.elapsedTime - startTimeRef.current
    const revealDuration = 3.5
    const rawProgress = Math.min(timeSinceStart / revealDuration, 1)
    const revealProgress = 1 - Math.pow(1 - rawProgress, 3) // Ease out cubic

    // Update simulation - EXACT parameters from original
    simulationMaterial.uniforms.uTime.value = clock.elapsedTime
    simulationMaterial.uniforms.uNoiseScale.value = 0.6
    simulationMaterial.uniforms.uNoiseIntensity.value = 0.52
    simulationMaterial.uniforms.uTimeScale.value = 1.0

    // FBO THROTTLE: Her 2 frame'de bir render (50% FBO cost save!)
    fboFrameSkipRef.current++

    if (fboFrameSkipRef.current >= 2) {
      fboFrameSkipRef.current = 0
      gl.setRenderTarget(fbo)
      gl.clear()
      gl.render(simScene, simCamera)
      gl.setRenderTarget(null)
    }

    // Update particles material
    particlesMaterial.uniforms.positions.value = fbo.texture
    particlesMaterial.uniforms.initialPositions.value = simulationMaterial.uniforms.positions.value
    particlesMaterial.uniforms.uTime.value = clock.elapsedTime
    particlesMaterial.uniforms.uRevealFactor.value = 4 * revealProgress
    particlesMaterial.uniforms.uRevealProgress.value = revealProgress
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
    super('VignetteEffect', vignetteFragmentShader, {
      uniforms: new Map([
        ['darkness', new THREE.Uniform(darkness)],
        ['offset', new THREE.Uniform(offset)]
      ])
    })
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
    let debounceTimer: NodeJS.Timeout | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const nowVisible = entry.isIntersecting

          if (debounceTimer) {
            clearTimeout(debounceTimer)
          }

          debounceTimer = setTimeout(() => {
            setIsVisible((prev) => {
              if (prev !== nowVisible) {
                return nowVisible
              }
              return prev
            })
          }, 150)
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer)
      }
      observer.disconnect()
    }
  }, [])

  // DPR optimization: Cap at 1.0 for Intel UHD Graphics performance
  const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.0) : 1

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
        frameloop={isVisible ? 'always' : 'never'}
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
