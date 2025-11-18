import "./Team.css";
import { FaInstagram, FaGoogle } from "react-icons/fa";
import { FaXTwitter, FaSquareFacebook } from "react-icons/fa6";
import Irene from "../assets/images/staff-irene.jpg";
import Brian from "../assets/images/staff-brian.jpg";
import Babra from "../assets/images/staff-babra.jpg";
import Fleeky from "../assets/images/staff-george.jpg";
import Linet from "../assets/images/staff-linnet.jpg";
import Joshua from "../assets/images/staff-joshua.jpg";

interface Social {
  url: string;
  icon: React.ReactNode;
}

interface TeamMember {
  name: string;
  position: string;
  image: string;
  socials: Social[];
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
  return (
    <div className="team-member-card">
      <div className="team-member-image-wrapper">
        <img
          src={member.image}
          alt={`A head-shot of ${member.name}`}
          className="team-member-image"
        />
      </div>
      <div className="team-member-information">
        <h3 className="team-member-name">{member.name}</h3>
        <p className="team-member-position">{member.position}</p>
        <div className="team-member-socials">
          {member.socials.map((social, index) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="team-member-social-url"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Irene Mutuku",
      position: "CEO, Founder",
      image: Irene,
      socials: [
        { url: "https://instagram.com", icon: <FaInstagram /> },
        { url: "https://twitter.com", icon: <FaXTwitter /> },
        { url: "https://facebook.com", icon: <FaSquareFacebook /> },
        { url: "https://google.com", icon: <FaGoogle /> },
      ],
    },
    {
      name: "Brian Nzioka",
      position: "Horse Groomer",
      image: Brian,
      socials: [
        { url: "https://instagram.com", icon: <FaInstagram /> },
        { url: "https://twitter.com", icon: <FaXTwitter /> },
        { url: "https://facebook.com", icon: <FaSquareFacebook /> },
        { url: "https://google.com", icon: <FaGoogle /> },
      ],
    },
    {
      name: "Babra Obare",
      position: "IT Support",
      image: Babra,
      socials: [
        { url: "https://instagram.com", icon: <FaInstagram /> },
        { url: "https://twitter.com", icon: <FaXTwitter /> },
        { url: "https://facebook.com", icon: <FaSquareFacebook /> },
        { url: "https://google.com", icon: <FaGoogle /> },
      ],
    },
    {
      name: "Fleeky George",
      position: "Horse Trainer",
      image: Fleeky,
      socials: [
        { url: "https://instagram.com", icon: <FaInstagram /> },
        { url: "https://twitter.com", icon: <FaXTwitter /> },
        { url: "https://facebook.com", icon: <FaSquareFacebook /> },
        { url: "https://google.com", icon: <FaGoogle /> },
      ],
    },
    {
      name: "Linnet Wanjiku",
      position: "Human Resource",
      image: Linet,
      socials: [
        { url: "https://instagram.com", icon: <FaInstagram /> },
        { url: "https://twitter.com", icon: <FaXTwitter /> },
        { url: "https://facebook.com", icon: <FaSquareFacebook /> },
        { url: "https://google.com", icon: <FaGoogle /> },
      ],
    },
    {
      name: "Joshua Kimani",
      position: "Horse Sanctuary",
      image: Joshua,
      socials: [
        { url: "https://instagram.com", icon: <FaInstagram /> },
        { url: "https://twitter.com", icon: <FaXTwitter /> },
        { url: "https://facebook.com", icon: <FaSquareFacebook /> },
        { url: "https://google.com", icon: <FaGoogle /> },
      ],
    },
  ];

  return (
    <section className="team-section" id="team">
      <div className="title">
        <p className="title-sub">team</p>
        <h2 className="title-main">our team</h2>
      </div>
      <div className="team-members-container">
        {teamMembers.map((member, index) => (
          <TeamMemberCard member={member} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Team;
