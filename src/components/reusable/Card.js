import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cardType, cardImgSrc, title, cardText, instructorName }) => {
  return (
    <div
      className={`card--custom overlay-container ${cardType ? cardType : ""}`}
    >
      <div className="overlay overlay--dark">
        <Link className="card__overlay__link-btn" to="/course/1">
          <img src="/images/icons/overlayButtonIcon.svg" alt="" />
        </Link>
      </div>

      <div className="card__img-container">
        <img src={cardImgSrc} className="card__img" alt="" />
      </div>
      <div className="card__text-container">
        <h6 className="card__title">{title}</h6>
        <p className="card__text">{cardText}</p>
        <span className="card__instructor-name">
          Instrucor : {instructorName}
        </span>
      </div>
    </div>
  );
};

export default Card;
