import React from "react";
const NavBarContent = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="pills-all"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <div className="container">
        <div className="row">
          <div className="col-3">
            {" "}
            <Card
              cardImgSrc="/assets/images/c1.png"
              title="Software engineering"
              cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
              instructorName="Andrew Ng"
            />
          </div>
          <div className="col-3">
            <Card
              cardImgSrc="/assets/images/c2.png"
              title="Cloud"
              cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
              instructorName="Ahmed saleh"
            />
          </div>
          <div className="col-3">
            <Card
              cardImgSrc="/assets/images/c3.png"
              title="Cloud"
              cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
              instructorName="Ahmed saleh"
            />
          </div>
          <div className="col-3">
            <Card
              cardImgSrc="/assets/images/c4.png"
              title="Cloud"
              cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
              instructorName="Ahmed saleh"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-3">
            <Card
              cardImgSrc="/assets/images/c1.png"
              title="Cloud"
              cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
              instructorName="Ahmed saleh"
            />
          </div>
          <div className="col-3">
            <Card
              cardImgSrc="/assets/images/c2.png"
              title="Cloud"
              cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
              instructorName="Ahmed saleh"
            />
          </div>
          <div className="col-3">
            <Card
              cardImgSrc="/assets/images/c3.png"
              title="Cloud"
              cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
              instructorName="Ahmed saleh"
            />
          </div>
          <div className="col-3">
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
  );
};

export default NavBarContent;
