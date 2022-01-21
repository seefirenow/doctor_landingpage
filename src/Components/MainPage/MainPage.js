import React from "react";
import { Card } from "react-bootstrap";
import "./MainPage.css";
import Navigation from "../Navigation/Navigation";
import image from "../../images/Mask Group 1.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import maskGroup3 from "../../images/Mask Group 3.png";
import { Button } from "@material-ui/core";
import bgRemoveDoctor from "../../images/5790-removebg.png";
import Service from "../Service/Service";
import Testimonials from "../Testimonial/Testimonial";
import Doctors from "../Doctors/Doctors";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";

const MainPage = () => {
  return (
    <div id="text" className="doctorPortal">
      <div className="doctorNav">
        <Navigation></Navigation>
      </div>
      <div className="doctorHeading">
        <div className="row mainBody">
          <div className="col-md-5">
            <div className="doctorText">
              <h1>
                Nowy komfort widzenia
                <br />
                Zacznij już dziś
              </h1>
              <p>
                Oral health is a key indicator of overall health, well-being and
                quality of life. It encompasses a range of diseases and
                conditions that include dental caries, Periodontal disease,
                Tooth loss, Oral cancer, Oral manifestations of HIV infection,
                Oro-dental trauma, Noma and birth defects such as cleft lip and
                palate.
              </p>
              <Link style={{ textDecoration: "none" }} to="/appointment">
                <Button className="buttonAppointment">UMÓW WIZYTĘ</Button>
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="doctorImg">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="ourBlog">
        <div>
          <h4 id="news">AKTUALNOŚCI</h4>
          <h1>Najnowsze informacje</h1>
          <div className="ourBlogDetails">
            <Card
              style={{
                width: "21rem",
                border: "none",
                boxShadow: "5px 5px 10px lightGray",
              }}
            >
              <Card.Body>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    marginTop: "50px",
                  }}
                >
                  Sprawdź ostatnie wpisy <br />
                  naszych lekarzy.
                </p>
                <FontAwesomeIcon
                  style={{ fontSize: "30px", marginTop: "50px" }}
                  icon={faLongArrowAltRight}
                />
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "21rem",
                border: "none",
                boxShadow: "5px 5px 10px lightGray",
              }}
            >
              <Card.Header style={{ border: "none", display: "flex" }}>
                <div className="doctorinfo">
                  <p>Dr. Ewa Krawczyk</p>
                  <p>15 Grudnia 2021</p>
                </div>
              </Card.Header>
              <Card.Body>
                <p style={{ fontSize: "20px", fontWeight: "700" }}>
                  Higiena pracy kluczem
                  <br />
                  do zdrowego wzroku
                </p>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  sint consequuntur non beatae alias dolorem!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{
                width: "21rem",
                border: "none",
                boxShadow: "5px 5px 10px lightGray",
              }}
            >
              <Card.Header style={{ border: "none", display: "flex" }}>
                <div className="doctorinfo">
                  <p>Dr. Anna Kowalska</p>
                  <p> 02 Stycznia 2022</p>
                </div>
              </Card.Header>
              <Card.Body>
                <p style={{ fontSize: "20px", fontWeight: "700" }}>
                  Wzrost wad wzroku
                  <br />u dzieci
                </p>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  sint consequuntur non beatae alias dolorem!
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="AboutUs">
        <div className="dentalCare">
          <h4 id="aboutUs">O NAS</h4>

          <div className="info">
            <div>
              <img src={maskGroup3} alt="" />
            </div>
            <div>
              <div>
                <h1>
                  Profesjonalna opieka
                  <br />
                  dla Twoich oczu
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  vero dolor cumque officia natus quaerat a vitae. Dolorum, quae
                  aperiam fugit corporis deleniti doloribus at excepturi.
                  Aspernatur quia sint earum dolore eius voluptatem maiores
                  laborum. Ipsam voluptates iusto laborum recusandae at optio,
                  eum quas aliquam cumque maxime consequuntur, possimus sunt
                  atque modi odit tempora? Quas enim sed qui ipsam consectetur
                  laborum amet reprehenderit suscipit ab corporis. Velit unde
                  dicta quia? Voluptas ad officia fugiat ducimus aperiam
                  temporibus, quis omnis voluptatibus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="publicServices">
        <div>
          <FontAwesomeIcon className="icon" icon={faClock} />
          <div>
            <p>Godziny otwarcia</p>
            <small>
              Pon-Pt 8-18
              <br />
              Sob 9-15
            </small>
          </div>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
          <div>
            <p>Nasza lokalizacja</p>
            <small>Białystok, Polska</small>
          </div>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
          <div>
            <p>Numer kontaktowy</p>
            <small>+48111111111</small>
          </div>
        </div>
      </div>
      <div id="appointment" className="makeAppointment">
        <div>
          <img src={bgRemoveDoctor} alt="" />
        </div>
        <div id="">
          <h4>UMÓW WIZYTĘ </h4>
          <h1>Umów wizytę już dziś</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            doloremque dolore ipsa dolorem exercitationem culpa in inventore
            asperiores nostrum tenetur.
          </p>
          <Link style={{ textDecoration: "none" }} to="/appointment">
            <Button className="buttonAppointment">UMÓW WIZYTĘ</Button>
          </Link>
        </div>
      </div>
      <Service></Service>
      <Testimonials></Testimonials>
      <Doctors></Doctors>
      <div className="contactBgc">
        <Form></Form>
      </div>
      <div className="footerWrap">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainPage;
