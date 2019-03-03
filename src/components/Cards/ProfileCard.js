import React from 'react'

export default function ProfileCard(props) {
  return (
    <div className="profile-card">
      <div className="profile-card__image">
          <img className="profile-card__image__inside" src={props.image} />
      </div>
      <div className="profie-card__info">

        <p className="profile-card__info__name">{props.name}</p>

        <p className="profile-card__info__pos">{props.position}</p>
        <p className="profile-card__info__bio">{props.bio}</p>

      </div>
    </div>
  )
}
