import React from "react";

export default function ProfileMainInfoCard(props) {
  return (
    <div className="profile-main-info-card">
      <div className="profile-main-info-card__icon">
        <i className={props.icon} />
      </div>
      <div className="profile-main-info-card__text">
        <p className="profile-main-info-card__title">{props.title}</p>
        <p className="profile-main-info-card__text__context">{props.date}</p>
        <p className="profile-main-info-card__text__context">{props.at}</p>
        <p className="profile-main-info-card__text__context">{props.desc}</p>
      </div>
    </div>
  );
}
