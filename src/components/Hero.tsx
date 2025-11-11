import "./Hero.css"

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-textbox">
      <p className="hero-textbox-paragraph">Introducing horse club</p>
      <h1 className="hero-textbox-heading">
        Inter relation between horses and riders
        </h1>
      <a 
      href="https://github.com/winniegich" 
      target="_blank"
      className="hero-textbox-cta"
      >Learn more</a>
      </div>
    </section>
  )
}

export default Hero;