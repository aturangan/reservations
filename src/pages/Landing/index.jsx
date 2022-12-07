export default function Landing({ children }) {
  return (
    <div className="homepage-landing">
      <div className="homepage-landing-hero">
        <div className="homepage-landing-hero-content">
          <b>Healthcare made easy.</b>

          {children}
          {/* <div className="content-section">
            <section onClick={() => setShowPage(CLIENT)} className="selection-block">
              <div className="client-selection">I'm a Client</div>
            </section>
            <section onClick={() => setShowPage(PROVIDER)} className="selection-block">
              <div className="provider-selection">I'm a Provider</div>
            </section>
          </div> */}
          
        </div>
      </div>
    </div>
  )
}