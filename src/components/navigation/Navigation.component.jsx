import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/images/Avatar50.png";
import "./Navigation.styles.scss";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  function mobileMenu() {
    setShowMenu(!showMenu);
  }

  // Navbar scroll
  const navbar = document.querySelector(".main-navbar");
  window.onscroll = () => {
    if (window.scrollY > 100) {
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  };

  return (
    <Fragment>
      <nav className="main-navbar" id="navbar">
        <Link className="logo-container" to="/">
          <img src={Logo} alt="Logo" className="logo" />
          <h2>Glen Popowich</h2>
        </Link>

        <div className="nav-wrapper">
          <div
            className={`menu-icon ${showMenu ? "nav-active" : ""}`}
            onClick={mobileMenu}
          >
            <div className={`bar1 ${showMenu ? "bar1-active" : ""}`}></div>
            <div className={`bar2 ${showMenu ? "bar2-active" : ""}`}></div>
            <div className={`bar3 ${showMenu ? "bar3-active" : ""}`}></div>
          </div>
        </div>
        <div className="nav-links-container" onClick={mobileMenu}>
          <Link className="nav-Link active" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/#services">
            Services
          </Link>
          <Link className="nav-link" to="/#about">
            About
          </Link>
          <Link className="nav-link" to="/#stack">
            TechStack
          </Link>
          <Link className="nav-link" to="/#faq">
            FAQ
          </Link>
          <Link className="nav-link" to="/#portfolio">
            Portfolio
          </Link>
          <Link className="nav-link" to="/#blog">
            Blog
          </Link>
          <Link className="nav-link" to="/#contact">
            Contact
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;
