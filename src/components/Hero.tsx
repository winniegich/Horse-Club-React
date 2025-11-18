import { useState } from "react";
import "./Hero.css";

type HeroProps = {
  subtitle?: string;
  title?: string;
  ctaText?: string;
  ctaLink?: string;
};

const Hero: React.FC<HeroProps> = ({
  subtitle = "Introducing horse club",
  title = "Inter relation between horses and riders",
  ctaText = "Learn more",
  ctaLink = "https://github.com/winniegich",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="hero-section" id="home">
      <div className="hero-textbox">
        <p className="hero-textbox-paragraph">{subtitle}</p>

        <h1 className="hero-textbox-heading">{title}</h1>

        <a
          href={ctaLink}
          target="_blank"
          rel="noreferrer"
          className={`hero-textbox-cta ${isHovered ? "cta-hover" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
};

export default Hero;
