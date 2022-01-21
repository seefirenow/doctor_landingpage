import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import logo from "../../images/logo.png";
import text from "../../images/text.png";
import "./Appointment.css";
import Footer from "../Footer/Footer";
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const Appointment = () => {
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
    <div>
      <div className="doctorHeading">
        <div className="appointmentNav">
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

            <div className="accessibility">
              <Button>
                <img src={text} alt="powiększenie tekstu" />
              </Button>
            </div>
          </Navbar>
        </div>
        <div className="formwrap">
          <AppointmentForm className="appoForm"></AppointmentForm>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
