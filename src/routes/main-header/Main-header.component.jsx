import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header.component";
import Image from "../../components/image/image.component";
import "./Main-header.styles.scss";

const Mainheader = () => {
  return (
    <Fragment>
      <header className="header-container" id="home">
        <Header />
        <Image />
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Mainheader;
