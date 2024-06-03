import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../../assets/images/Avatar50.png";
import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="main-navbar" id="navbar">
        <Link className="logo-container" to="/">
          {/* <Logo className="logo" /> */}
          <h2>Glen Popowich</h2>
        </Link>

        <div className="nav-wrapper">
          <div className="menu-icon">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <div className="nav-links-container">
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
