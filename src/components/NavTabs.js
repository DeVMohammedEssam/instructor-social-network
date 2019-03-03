import React, { Component } from "react";
import Card from "./reusable/Card";

export default class NavTabs extends Component {
  render() {
    return (
      <div className="n-tabs">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-all"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              All
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-engineering"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Engineering
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-design"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Design
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-personal"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              personal skills
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-marketing"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              marketing
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-Social"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Social
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-cs"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Computer Science
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-all"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="container">
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
                  <Card
                    cardImgSrc="/assets/images/c1.png"
                    title="Cloud"
                    cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
                    instructorName="Ahmed saleh"
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
          <div
            className="tab-pane fade"
            id="pills-engineering"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="container">
              {" "}
              <div className="row">
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
          <div
            className="tab-pane fade"
            id="pills-design"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            {" "}
            <div className="container">
              {" "}
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
                  <Card
                    cardImgSrc="/assets/images/c2.png"
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
          <div
            className="tab-pane fade"
            id="pills-personal"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            {" "}
            <div className="container">
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
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-marketing"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            {" "}
            <div className="container">
              {" "}
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
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-Social"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            {" "}
            <div className="container">
              {" "}
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
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-cs"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            {" "}
            <div className="container">
              {" "}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
