import "./Header.css"
import { FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import horse from "../assets/images/horse.png"

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        {/* email address */}
        <div className="header-contact">
          <span className="header-contact-icon">
            <FaTelegramPlane />
          </span>
          <p className="header-contact-text">info@horseclub.com</p>
        </div>
        {/* end of email address */}

        {/* logo */}
      <div className="logo">
        <img src={horse} alt="logo" />
        <p className="logo-text">horse club</p>
      </div>
      {/* end of logo */}

      {/* phone number */}
      <div className="header-contact">
        <p className="header-contact-text">+254785359751</p>
        <span className="header-contact-icon">
          <FaPhoneAlt />
        </span>
      </div>
      {/* end of phone number */}
      </div>
      <div className="header-bottom">
        <nav>
          <ul className="nav-list">
            <li nav-list-item>
              <a href="#home" className="nav-list-item-link">home</a>
            </li>
            <li nav-list-item>
              <a href="#about" className="nav-list-item-link">about us</a>
            </li>
            <li nav-list-item>
              <a href="#services" className="nav-list-item-link">services</a>
            </li>
            <li nav-list-item>
              <a href="#reasons" className="nav-list-item-link">why us</a>
            </li>
            <li nav-list-item>
              <a href="#team" className="nav-list-item-link">team</a>
            </li>
            <li nav-list-item>
              <a href="#blog" className="nav-list-item-link">blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;