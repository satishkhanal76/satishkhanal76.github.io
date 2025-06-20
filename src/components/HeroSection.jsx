
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea magni
            error debitis dolor odit quas repudiandae corrupti unde saepe
            tempora obcaecati eligendi minus quibusdam similique distinctio
            laboriosam corporis, nisi aut!
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection