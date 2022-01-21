import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div>
          <div>
            <p>Usługi</p>
          </div>
          <div>
            <small>Konsultacje okulistyczne</small>
            <br />
            <small>Zabiegi okulistyczne</small>
            <br />
            <small>Diagnostyka i leczenie chorób oczu</small>
            <br />
            <small>Zabiegi laserowe</small>
            <br />
            <small> Korekcja wad wzroku</small>
          </div>
        </div>
        <div>
          <div>
            <p> Leczenie chorób oczu</p>
          </div>
          <div>
            <small>Zaćma</small>
            <br />
            <small>Jaskra</small>
            <br />
            <small>Komputerowe badanie wzroku i dobór okularów</small>
            <br />
            <small>Diagnostyka chorób siatkówki</small>
            <br />
            <small>Konsultacje okulistyczne</small>
          </div>
        </div>
        <div>
          <div>
            <p>Nasz adres </p>
          </div>
          <div>
            <small>Białystok, Polska</small>
            <div className="brandIcon">
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faGooglePlusG} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="wrapCallNow">
              <small>Zadzwoń teraz</small>
              <button className="callNow">+48111111111</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
