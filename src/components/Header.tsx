import { useState } from "react";
import "./Header.css";
import { FaPhoneAlt, FaBars, FaTimes, FaTelegramPlane } from "react-icons/fa";
import horse from "../assets/images/horse.png";
import NavItem from "./NavItem";

type HeaderProps = {
  email?: string;
  phone?: string;
  logoText?: string;
  navLinks?: { label: string; link: string }[];
};

export default function Header({
  email = "info@horseclub.com",
  phone = "+254785359751",
  logoText = "horse club",
  navLinks = [
    { label: "home", link: "#home" },
    { label: "about us", link: "#about" },
    { label: "services", link: "#services" },
    { label: "why us", link: "#reasons" },
    { label: "team", link: "#team" },
    { label: "blog", link: "#blog" },
  ],
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header">
      {/* Top Section */}
      <div className="header-top">
        <div className="header-contact">
          <span className="header-contact-icon">
            <FaTelegramPlane />
          </span>
          <p className="header-contact-text">{email}</p>
        </div>

        <div className="logo">
          <img src={horse} alt="logo" />
          <p className="logo-text">{logoText}</p>
        </div>

        <div className="header-contact">
          <p className="header-contact-text">{phone}</p>
          <span className="header-contact-icon">
            <FaPhoneAlt />
          </span>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="header-bottom">
        {/* Mobile Menu Toggle */}
        <button className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <ul className="nav-list">
            {navLinks.map((item) => (
              <NavItem key={item.label} label={item.label} link={item.link} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}


