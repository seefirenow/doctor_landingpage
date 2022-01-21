import React, { useState } from "react";
import "./AppointmentForm.css";
import { Button } from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../../firebase.js";

const AppointmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const appointmentOption = [
    {
      label: "Badanie wzroku Dr. Ewa Krawczyk",
      value: "krawczyk_badaniewzroku",
    },
    {
      label: "Dobieranie korekcji okularowej/soczewkowej Dr. Ewa Krawczyk",
      value: "krawczyk_dobieraniekorekcji",
    },
    {
      label: "Diagnostyka chorób oczu Dr. Magdalena Nowak",
      value: "nowak_diagnostyka",
    },
    {
      label: "Zabieg okulistyczny Dr. Magdalena Nowak",
      value: "nowak_zabieg",
    },

    {
      label: "Badanie wzroku u dzieci Dr.Anna Kowalska",
      value: "kowalska_badaniewzroku",
    },
    {
      label: "Diagnostyka chorób oczu u dzieci Dr. Anna Kowalska",
      value: "kowalska_diagnostyka",
    },
  ];

  const [loader, setLoader] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [appointment, setAppointment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("appointment")
      .add({
        name: name,
        email: email,
        number: number,
        appointment: appointment,
        data: startDate,
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
    setNumber("");
    setAppointment("");
  };
  return (
    <div className="wrap">
      <div className="formAppointment">
        <form id="appointmentForm" className="form" onSubmit={handleSubmit}>
          <div className="appointmentHeader">
            <h1>Wypełnij formularz, żeby umówić się na wizytę</h1>
            <h2>Oddzwonimy z propozycją wizyty</h2>
          </div>
          <label>Imię i Nazwisko </label>
          <input
            type="text"
            placeholder="Imię i Nazwisko "
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
          <label>Numer telefonu</label>
          <input
            type="tel"
            placeholder="Numer telefonu"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          <br />
          <label>Wybierz wizytę</label>
          <div className="select-container">
            <select
              value={appointmentOption}
              onChange={(e) => setAppointment(e.target.value)}
            >
              {appointmentOption.map((option) => (
                <option
                  value={option.value}
                  onChange={(e) => setAppointment(e.target.value)}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <label>Wybierz odpowiedającą Ci datę</label>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              isClearable
            />
          </div>
          <Button
            className="submitBtn"
            type="submit"
            style={{ background: loader ? "#ccc" : "#137460" }}
          >
            Wyślij
          </Button>
        </form>
      </div>
    </div>
  );
};
export default AppointmentForm;
