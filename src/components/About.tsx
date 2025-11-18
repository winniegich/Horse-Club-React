import { useState } from "react";
import "./About.css";
import aboutImg from "../assets/images/about-img.jpg";

type AboutProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
};

const About: React.FC<AboutProps> = ({
  subtitle = "We are here to take care of your horses",
  title = "We are your horses' best friend now and forever",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus provident quae ipsa doloremque laudantium...",
  ctaText = "get started now",
  ctaLink = "https://github.com/winniegich",
  image = aboutImg,
}) => {
  
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => setShowMore((prev) => !prev);

  return (
    <section className="about-section" id="about">
      <div className="about-textbox">
        <p className="about-text-subtitle">{subtitle}</p>

        <h2 className="about-title">{title}</h2>

        <p className="about-description">{description}</p>

        {showMore && (
          <p className="about-extra">
            Horses are majestic animals that require love, connection, and proper care.
            This community is dedicated to helping riders build meaningful relationships 
            with their horses.
          </p>
        )}

        <a href={ctaLink} target="_blank" className="about-cta">
          {ctaText}
        </a>

        <button className="about-toggle-btn" onClick={toggleMore}>
          {showMore ? "Show Less" : "Read More"}
        </button>
      </div>

      <div className="about-img-wrapper">
        <img src={image} alt="horse running" className="about-img-image" />
      </div>
    </section>
  );
};

export default About;
