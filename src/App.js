import React, { useState } from "react";
import "./App.css";
import Countdown from "./Component/Counter";
import Popup from "./Component/Popup";
import logo from "./img/logo.png";
import bgRight from "./img/bgRight.png";
import bgLeft from "./img/bgLeft.png";
import arrow from "./img/arrow.png";

function App() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    subscribe().then(() => {
      cleanup();
      setShowPopup(true);
    });
  };

  function cleanup() {
    setEmail("");
  }

  async function subscribe() {
    //fake api
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      email,
    })
      .then((response) => response.json())
      .then((body) => {
        console.log(body);
      })
      .catch((error) => {
        console.error("Error :" + error);
      });
  }

  return (
    <div className="app">
      {showPopup && <Popup handleClose={() => setShowPopup(false)} />}
      <div className="header">
        <img className="bgLeft" src={bgLeft} alt="" />
        <a href="/" className="linkLogo">
          <img className="logo" src={logo} alt="" />
        </a>
        <img className="bgRight" src={bgRight} alt="" />
      </div>

      <div className="main">
        <div className="title">
          <h1 className="h1">UNDER CONSTRUCTION</h1>
          <p className="titleP">
            We're making lots of improvements and will be back soon
          </p>
        </div>
        <Countdown />
        <div className="event">
          <p className="eventP">Check our event page when you wait:</p>
          <div className="eventBtn">
            <a href="https://www.google.com" className="btn">
              <div className="btnContent">
                Go to the event
                <img className="arrowImg" src={arrow} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <form className="formEmail" onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={handleEmailChange}
            className="inputEmail"
            type="email"
            name="email"
            placeholder="Enter your Email and get notified"
            required
          />
          <button type="submit" className="btnEmail"></button>
        </form>
      </div>
    </div>
  );
}

export default App;
