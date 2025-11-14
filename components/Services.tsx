export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <h2>Our Solutions</h2>
        <div className="services-grid">
          <div className="service-card" id="lead-gen">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Lead Generation & Revenue Growth</h3>
            <p>
              Automate your sales funnel to find and nurture leads effortlessly. Turn cold leads to warm leads to boost sales.
            </p>
          </div>

          <div className="service-card" id="workflow">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
            </div>
            <h3>Workflow Automation</h3>
            <p>
              Complete repetitive tasks autonomously, giving your staff time to focus on critical tasks. Schedule tasks 24/7.
            </p>
          </div>

          <div className="service-card" id="ai-agents">
            <div className="service-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2a2 2 0 0 0-2 2c0 .74.4 1.39 1 1.73V7h2V5.73c.6-.34 1-.99 1-1.73a2 2 0 0 0-2-2Z"/>
                <path d="M10 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6"/>
                <circle cx="8" cy="14" r="2"/>
                <circle cx="16" cy="14" r="2"/>
              </svg>
            </div>
            <h3>Customized AI Agents</h3>
            <p>
              Integrate AI agents trained with your data to handle clients and automate tasks around the clock.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
