import React from "react";
import "./Testimonials.css";
import { Card } from "react-bootstrap";
import ellips1 from "../../images/Ellipse 1.png";
import ellips2 from "../../images/Ellipse 2.png";
import ellips3 from "../../images/Ellipse 3.png";

const Testimonials = () => {
  return (
    <div id="opinion" className="testimonial">
      <div>
        <h4>Opinie</h4>
        <h1>Co mówią o nas pacjęci</h1>
        <div className="testimonialDetails">
          <Card
            style={{
              width: "21rem",
              border: "none",
              boxShadow: "5px 5px 10px lightGray",
            }}
          >
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, corporis molestiae maiores nihil dicta expedita
                ipsum, reiciendis natus eligendi libero sit quisquam quod ut
                nostrum voluptate accusamus atque dolorem maxime.
              </Card.Text>
            </Card.Body>
            <Card.Header style={{ border: "none", display: "flex" }}>
              <img
                src={ellips2}
                alt="Zdjęcie pacjęnta, który wyraził swoją opinie"
              />
              <div className="patientinfo">
                <p>Katarzyna Zaręba</p>
                <p>Białystok</p>
              </div>
            </Card.Header>
          </Card>
          <Card
            style={{
              width: "21rem",
              border: "none",
              boxShadow: "5px 5px 10px lightGray",
            }}
          >
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, corporis molestiae maiores nihil dicta expedita
                ipsum, reiciendis natus eligendi libero sit quisquam quod ut
                nostrum voluptate accusamus atque dolorem maxime.
              </Card.Text>
            </Card.Body>
            <Card.Header style={{ border: "none", display: "flex" }}>
              <img
                src={ellips1}
                alt="Zdjęcie pacjęnta, który wyraził swoją opinie"
              />
              <div className="patientinfo">
                <p>Piotr Nowakowski</p>
                <p>Kleosin</p>
              </div>
            </Card.Header>
          </Card>
          <Card
            style={{
              width: "21rem",
              border: "none",
              boxShadow: "5px 5px 10px lightGray",
            }}
          >
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, corporis molestiae maiores nihil dicta expedita
                ipsum, reiciendis natus eligendi libero sit quisquam quod ut
                nostrum voluptate accusamus atque dolorem maxime.
              </Card.Text>
            </Card.Body>
            <Card.Header style={{ border: "none", display: "flex" }}>
              <img
                src={ellips3}
                alt="Zdjęcie pacjęnta, który wyraził swoją opinie"
              />
              <div className="patientinfo">
                <p>Kamila Zawada</p>
                <p>Choroszcz</p>
              </div>
            </Card.Header>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
