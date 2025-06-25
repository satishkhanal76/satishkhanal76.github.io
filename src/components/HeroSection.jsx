
import './HeroSection.css'
import HeroAvatarAndSocials from './HeroAvatarAndSocials'


const HeroSection = () => {
    
  return (
    <section className="container">
      <div className="hero-container">
        <HeroAvatarAndSocials />
        <div className="hero-text-container">
          <h6 className="hero-title-prefix"><strong>Hi there! 👋 I'm</strong></h6>
          <h1 className="hero-title">
            <span>Satish</span><span className="title-spread">Khanal</span>
          </h1>
          <p className="hero-desc">
            Full-Stack developer with 5+ years of experience building real-world web applications. 
            Passionate about clean code, problem-solving, and creating user-friendly digital experiences.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection