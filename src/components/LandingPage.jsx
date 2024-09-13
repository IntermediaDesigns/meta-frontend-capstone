import AboutSection from "./AboutSection"
import Hero from "./Hero"
import Specials from "./Specials"
import Testimonials from "./Testimonials"

const landingPageStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}

const mainStyle = {
  flex: 1,
}

function LandingPage() {
  return (
    <div style={landingPageStyle}>
      <main style={mainStyle}>
        <Hero />
        <Specials />
        <Testimonials />
        <AboutSection />
      </main>
    </div>
  );
}

export default LandingPage