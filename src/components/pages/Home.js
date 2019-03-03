import React, { Component } from "react";
import NavTabs from "../NavTabs";
import Navbar from "../reusable/Navbar";
import Card from "../reusable/Card";
class Home extends Component {
  state = {
    isLogged: false
  };
  componentDidMount() {
    this.props.location.hash === "#logged" &&
      this.setState(() => ({ isLogged: true }));
  }
  logOut = () => {
    this.setState(() => ({ isLogged: false }));
  };
  render() {
    return (
      <React.Fragment>
        {this.state.isLogged ? (
          <Navbar signed={true} login={false} />
        ) : (
          <Navbar />
        )}

        <div className="first-part">
          <img
            src="images/49070749_301761530690122_7352554269209264128_n.png"
            alt=""
            width={{ width: "100%", height: "100%" }}
          />
          <div className="text">
            <h3>Instructor Social Network</h3>
            <p className="lead">
              Learning is more intersting than you thought and you will know
              that by using this website and take course.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-3 d-none d-lg-block p-3 ">
            <h4 className="text-center mb-5">Latest offers</h4>
            <div className="" style={{ marginBottom: "100px" }}>
              <Card
                cardImgSrc="/assets/images/c3.png"
                title="Cloud"
                cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
                instructorName="Ahmed saleh"
              />
            </div>

            <div className="mt-4">
              <Card
                cardImgSrc="/assets/images/c3.png"
                title="Cloud"
                cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, tempora!"
                instructorName="Ahmed saleh"
              />
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <NavTabs />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
