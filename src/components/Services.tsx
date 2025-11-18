import { useState } from "react";
import "./Services.css";
import vet from "../assets/images/service-vet.png";
import grooming from "../assets/images/service-horse-grooming.png";
import training from "../assets/images/service-horse-training.png";
import feeding from "../assets/images/service-horse-feeding.png";
import santuary from "../assets/images/service-horse-santuary.png";
import tracking from "../assets/images/service-horse-tracking.png";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServicesProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: "Veterinary service",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: vet,
  },
  {
    title: "Horse grooming",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: grooming,
  },
  {
    title: "Horse training",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: training,
  },
  {
    title: "Horse feeding",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: feeding,
  },
  {
    title: "Sanctuary for horses",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: santuary,
  },
  {
    title: "Digital tracking",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: tracking,
  },
];

function Services({ services }: ServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const servicesToRender = services ?? defaultServices;

  return (
    <section className="services-section" id="services">
      <div className="title">
        <p className="title-sub">some of the things we offer</p>
        <h2 className="title-main">our services</h2>
      </div>

      <div className="services-container">
        {servicesToRender.map((service, index) => (
          <div
            key={index}
            className={`service-card ${
              hoveredIndex === index ? "active-service" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="service-card-img-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
