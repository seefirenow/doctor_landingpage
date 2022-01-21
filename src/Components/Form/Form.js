import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Form.css";
import { db } from "../../firebase.js";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Twoja wiadomość została wysłana");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form id="contact" className="form" onSubmit={handleSubmit}>
      <div className="contactUs">
        <div>
          <h1>Skontaktuj się z nami </h1>
          <div className="contactUsDetails">
            <div>
              <label>Imię </label>
              <input
                placeholder="Imię"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <label>Email</label>
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <br />
              <label>Wiadomość</label>
              <textarea
                placeholder="Wiadomość"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <br />
              <Button
                className="submitBtn"
                type="submit"
                style={{ background: loader ? "#ccc" : "#137460" }}
              >
                Wyślij
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
