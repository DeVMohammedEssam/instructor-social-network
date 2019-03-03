import React from "react";
const BlueCurveBackground = () => {
  return (
    <div className="blue-curve">
      <img
        className="blue-curve__img"
        src="./images/backgrounds/signIn.svg"
        alt=""
      />
      <div className="blue-curve__text-container">
        <h3 className="blue-curve__title">
          Instructor Social <br /> Network
        </h3>
        <p className="blue-curve__text">
          Learning is more intersting than you thought
        </p>
      </div>

      <div className="blue-curve__icons-container">
        <div className="icon-container">
          <img src="./images/icons/signIn/0.svg" alt="" />
          <p>Get your certificate</p>
        </div>

        <div className="icon-container ">
          <img src="./images/icons/signIn/1.svg" alt="" />
          <p>master your passion</p>
        </div>

        <div className="icon-container ">
          <img src="./images/icons/signIn/2.svg" alt="" />
          <p>Learn Fast</p>
        </div>
      </div>
    </div>
  );
};

export default BlueCurveBackground;
