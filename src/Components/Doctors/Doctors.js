import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import "./Doctors.css";
import doctor1 from "../../images/doctor1.png";
import doctor2 from "../../images/doctor2.png";
import doctor3 from "../../images/doctor3.png";

const Doctors = () => {
  return (
    <div id="doctorsPage" className="ourDoctors">
      <div>
        <h4>Nasi lekarze</h4>
        <div className="ourDoctorsDetails">
          <Card style={{ width: "21rem", border: "none" }}>
            <img src={doctor1} alt="Zdjęcie doctor Anny Kowalskiej" />
            <div className="doctorsInfo">
              <p>Dr. Anna Kowalska</p>
              <p> Okulista dziecięcy </p>
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} /> +48231213231
              </p>
            </div>
          </Card>
          <Card style={{ width: "21rem", border: "none" }}>
            <img
              className="doctor2"
              src={doctor2}
              alt="Zdjęcie doctor Magdaleny Nowak"
            />
            <div className="doctorsInfo">
              <p>Dr. Magdalena Nowak</p>
              <p>Specjalista chorób oczu</p>
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} /> +48321321321
              </p>
            </div>
          </Card>
          <Card style={{ width: "21rem", border: "none" }}>
            <img src={doctor3} alt="Zdjęcie doctor Ewy Krawczyk" />
            <div className="doctorsInfo">
              <p>Dr.Ewa Krawczyk</p>
              <p>Okulista</p>
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} /> +48123123123
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Doctors;
