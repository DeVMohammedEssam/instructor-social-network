import React, { Component } from "react";
import ProfileCard from "./Cards/ProfileCard";
import Card from "./reusable/Card";
import { Link } from "react-router-dom";
export default class Channel extends Component {
  render() {
    return (
      <div className="channel">
        <div className="row">
          <div className="col-12 col-lg-3 ">
            <div className="channel__side-info">
              <ProfileCard
                name="Andrew Ng"
                position="software Engineering"
                bio="Best wat it the best way"
                image="/assets/images/oyG30NEH_400x400.jpg"
              />
              <div className="card card--curved">
                <div className="channel__side-info__link channel__side-info__link--curved">
                  <Link to="/profile/12">
                    <p className="link-orange">Andrew's profile</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="channel__courses">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-3">
                  {" "}
                  <Card
                    cardImgSrc="/assets/images/c1.png"
                    title="Software engineering"
                    cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
                    instructorName="Andrew Ng"
                  />
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                  <Card
                    cardImgSrc="/assets/images/c2.png"
                    title="Cloud"
                    cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
                    instructorName="Ahmed saleh"
                  />
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                  <Card
                    cardImgSrc="/assets/images/c3.png"
                    title="Cloud"
                    cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
                    instructorName="Ahmed saleh"
                  />
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                  <Card
                    cardImgSrc="/assets/images/c4.png"
                    title="Cloud"
                    cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
                    instructorName="Ahmed saleh"
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 col-md-6 col-xl-3">
                  {" "}
                  <Card
                    cardImgSrc="/assets/images/c1.png"
                    title="Software engineering"
                    cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
                    instructorName="Andrew Ng"
                  />
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                  <Card
                    cardImgSrc="/assets/images/c2.png"
                    title="Cloud"
                    cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
                    instructorName="Ahmed saleh"
                  />
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                  <Card
                    cardImgSrc="/assets/images/c3.png"
                    title="Cloud"
                    cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
                    instructorName="Ahmed saleh"
                  />
                </div>
                <div className="col-12 col-md-6 col-xl-3">
                  <Card
                    cardImgSrc="/assets/images/c4.png"
                    title="Cloud"
                    cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
                    instructorName="Ahmed saleh"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
