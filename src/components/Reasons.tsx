import { useState } from "react";
import "./Reasons.css";

interface Reason {
  title: string;
  description: string;
}

interface ReasonsProps {
  reasons?: Reason[]; 
}

function Reasons({ reasons }: ReasonsProps) {
  
  const defaultReasons: Reason[] = [
    {
      title: "expert technicians",
      description:
        "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
    },
    {
      title: "professional advice",
      description:
        "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
    },
    {
      title: "great support",
      description:
        "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
    },
    {
      title: "technical skills",
      description:
        "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
    },
    {
      title: "highly recommended",
      description:
        "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
    },
    {
      title: "positive reviews",
      description:
        "Usage of the Internet is becoming more common due to rapid advancement of technology and power.",
    },
  ];

  const reasonsToRender = reasons ?? defaultReasons;

  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  return (
    <section className="reasons-section" id="reasons">
      {reasonsToRender.map((reason, index) => (
        <div
          key={index}
          className={`reason ${
            selectedReason === reason.title ? "active-reason" : ""
          }`}
          onClick={() => setSelectedReason(reason.title)}
        >
          <h3 className="reason-title">{reason.title}</h3>
          <p className="reason-description">{reason.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Reasons;
