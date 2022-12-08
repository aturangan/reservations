export default function Landing({ children }) {
  return (
    <div className="homepage-landing">
      <div className="homepage-landing-hero">
        <div className="homepage-landing-hero-content">
          <b>Healthcare made easy.</b>
          {children}
        </div>
      </div>
    </div>
  )
}