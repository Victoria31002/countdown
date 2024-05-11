import React, { useState, useEffect } from "react";
import counterImg from "../img/counterImg.svg";

function Countdown() {
  const calculateCountdownTime = () => {
    const targetDate = new Date("2024-07-24T00:00:00");
    const currentDate = new Date();

    const difference = targetDate.getTime() - currentDate.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [countdownTime, setCountdownTime] = useState(calculateCountdownTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownTime(calculateCountdownTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = countdownTime;

  return (
    <div className="counter">
      <div className="counterTime">
        <p className="counterNum">{days}:</p>
        <p></p>
        <div className="countContainer">
          <p className="count"> DD</p>
          <img src={counterImg} alt="Counter" />
        </div>
      </div>

      <div className="counterTime">
        <div className="counterNum">{hours}:</div>
        <div className="countContainer">
          <p className="count"> HH</p>
          <img src={counterImg} alt="Counter" />
        </div>
      </div>

      <div className="counterTime">
        <div className="counterNum"> {minutes}:</div>
        <div className="countContainer">
          <p className="count"> MM</p>
          <img src={counterImg} alt="Counter" />
        </div>
      </div>

      <div className="counterTime">
        <div className="counterNum">{seconds}:</div>
        <div className="countContainer">
          <p className="count"> SS</p>
          <img src={counterImg} alt="Counter" />
        </div>
      </div>
    </div>
  );
}

export default Countdown;
