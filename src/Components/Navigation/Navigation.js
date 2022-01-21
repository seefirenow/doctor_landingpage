import React, { useState, useEffect, useRef } from "react";
import "./Navigation.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Navigation = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY >= 100;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bgc">
      <div className="nav">
        <Navbar
          style={{
            transition: "1s ease",
            backgroundColor: navBackground ? "white" : "transparent",
          }}
          expand="lg"
          fixed="top"
        >
          <Navbar.Brand>
            <Link href="/">
              <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <div className="nav">
              <Nav>
                <Nav.Link href="#news">
                  {" "}
                  <h4 className="one">Aktualności</h4>
                </Nav.Link>
                <Nav.Link href="#aboutUs">
                  {" "}
                  <h4 className="one">O nas</h4>
                </Nav.Link>
                <Nav.Link href="#appointment">
                  {" "}
                  <h4 className="one"> Umów wizytę</h4>
                </Nav.Link>
                <Nav.Link href="#service">
                  {" "}
                  <h4 className="one">Usługi </h4>
                </Nav.Link>
                <Nav.Link href="#opinion">
                  {" "}
                  <h4 className="one">Opinie</h4>
                </Nav.Link>
                <Nav.Link href="#doctorsPage">
                  {" "}
                  <h4 className="one"> Nasi lekarze</h4>
                </Nav.Link>

                <Nav.Link href="#contact">
                  <h4 className="one">Kontakt</h4>
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
