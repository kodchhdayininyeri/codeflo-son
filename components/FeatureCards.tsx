export default function FeatureCards() {
  const features = [
    {
      title: "AI Agents",
      description: "AI Agents that handle everyday operations seamlessly"
    },
    {
      title: "Workflow",
      description: "Customised workflows to automate your time consuming tasks"
    },
    {
      title: "Revenue Growth",
      description: "Lead generation automation to interact with clients and increase sales"
    }
  ]

  return (
    <section className="relative z-10 -mt-20 px-4 sm:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background/50 backdrop-blur-sm border border-primary/20 p-8 rounded-lg hover:border-primary/40 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(117, 167, 212, 0.05) 0%, rgba(90, 14, 39, 0.05) 100%)'
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}