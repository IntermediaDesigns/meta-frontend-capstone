import AboutSection from "./AboutSection"
import Hero from "./Hero"
import Specials from "./Specials"
import Testimonials from "./Testimonials"
import Navbar from "./Navbar"
import Footer from "./Footer"

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
      <Navbar />
      <main style={mainStyle}>
        <Hero />
        <Specials />
        <Testimonials />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage