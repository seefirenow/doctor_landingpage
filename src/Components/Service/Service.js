import React from "react";
import "./Service.css";
import eye from "../../images/eye.png";
import doctor from "../../images/doctor.png";
import glasses from "../../images/glasses.png";
const Service = () => {
  return (
    <div id="service" className="ourServices">
      <div>
        <h4>Nasze usługi</h4>
        <h2> Usługi jakie oferujemy</h2>
        <div className="servicesDetails">
          <div>
            <img className="imageService" src={eye} alt="" />
            <span>Zabiegi</span>
            <p>
              Cupidatat laborum qui excepteur anim magna occaecat veniam et
              consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod
              elit. Est culpa culpa nisi excepteur duis ad duis mollit.
            </p>
          </div>
          <div>
            <img className="imageService" src={doctor} alt="" />
            <span>Konsultacje</span>
            <p>
              Cupidatat laborum qui excepteur anim magna occaecat veniam et
              consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod
              elit. Est culpa culpa nisi excepteur duis ad duis mollit.
            </p>
          </div>
          <div>
            <img className="imageService" src={glasses} alt="" />
            <span>Diagnostyka</span>
            <p>
              Cupidatat laborum qui excepteur anim magna occaecat veniam et
              consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod
              elit. Est culpa culpa nisi excepteur duis ad duis mollit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
