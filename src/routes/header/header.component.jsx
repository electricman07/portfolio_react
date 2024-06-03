import { Fragment } from "react";
import "./header.styles.scss";

const Header = () => {
  return (
    <Fragment>
      <header className="header-container" id="home">
        <div className="image-container">
          <div className="image-src">
            <img src="" alt="" />
          </div>
        </div>

        <div className="title-container">
          <div className="title">
            <span className="title-span">I am </span>
            <h2 className="main-title">Glen Popowich</h2>
          </div>
          <h3 className="sub-title">Web Designer / Developer</h3>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
