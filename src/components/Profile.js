import React, { Component } from "react";
import ProfileCard from "./Cards/ProfileCard";
import { Link } from "react-router-dom";
import ProfileMainInfoCard from "./Cards/ProfileMainInfoCard";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSent: false
    };
  }
  onClick = () => {
    this.setState({ isSent: true });
  };
  onClose = () => {
    this.setState({ isSent: false });
  };
  render() {
    return (
      <div className="profile">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-3">
            <div className="profile__side-info">
              <ProfileCard
                name="Andrew Ng"
                position="software Engineering"
                bio="Best wat it the best way"
                image="/assets/images/oyG30NEH_400x400.jpg"
              />
              <div className="card">
                <div className="profile__side-info__link">
                  <Link to="/channel/15">
                    <p className="link-orange">Go To Andrew's Channel</p>
                  </Link>
                </div>
              </div>
              <div className="card">
                <div className="profile__side-info__social">
                  <p className="profile__side-info__social__text">Contact</p>
                  <div className="row">
                    <div className="col-2">
                      <img
                        className="profile__side-info__social__icon"
                        src="/assets/images/facebook.png"
                        alt=""
                      />
                    </div>
                    <div className="col-2">
                      <img
                        className="profile__side-info__social__icon"
                        src="/assets/images/google-plus.png"
                        alt=""
                      />
                    </div>
                    <div className="col-2">
                      <img
                        className="profile__side-info__social__icon"
                        src="/assets/images/twitter.png"
                        alt=""
                      />
                    </div>
                    <div className="col-2">
                      <img
                        className="profile__side-info__social__icon"
                        src="/assets/images/linkedin.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="profile__side-info__link">
                <p
                  className="link-green"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Send Message
                </p>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          New message
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                          onClick={this.onClose}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        {this.state.isSent ? (
                          <div className="message-sent">
                            <i className="far fa-check-circle" />
                            <p className="message-sent__text">
                              Message was delivered successfuly
                            </p>
                          </div>
                        ) : (
                          <span>
                            <form>
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="title..."
                                  id="recipient-name"
                                />
                              </div>
                              <div className="form-group">
                                <textarea
                                  rows="14"
                                  className="form-control"
                                  placeholder="type your message.."
                                  id="message-text"
                                />
                              </div>
                            </form>
                            <div
                              className="button-border"
                              onClick={this.onClick}
                            >
                              <i className="fa fa-cloud-upload-alt" /> Send Now
                            </div>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="profile__side-info__secondry-info">
                <p>Students number : 968</p>
                <p>free Courses : 2</p>

                <p>paid Courses : 8</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-9">
            <div className="profile__main-info">
              <div className="profile__main-info__item">
                <div className="profile__main-info__item__head">Experience</div>

                <ProfileMainInfoCard
                  title="Machine Learning"
                  date="17 Jun"
                  at="Cairo Governorate, Egypt"
                  desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum culpa delectus, mollitia ipsum nam repellendus, perferendis molestias at lab."
                  icon="fa fa-briefcase"
                />
                <ProfileMainInfoCard
                  title="Deep learning"
                  date="17 Jun"
                  at="Cairo Governorate, Egypt"
                  desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum culpa delectus, mollitia ipsum nam repellendus, perferendis molestias at lab."
                  icon="fa fa-briefcase"
                />
                <ProfileMainInfoCard
                  title="Python "
                  date="17 Jun"
                  at="Cairo Governorate, Egypt"
                  desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum culpa delectus, mollitia ipsum nam repellendus, perferendis molestias at lab."
                  icon="fa fa-briefcase"
                />
              </div>
              <div className="profile__main-info__item">
                <div className="profile__main-info__item__head">Education</div>

                <ProfileMainInfoCard
                  title="Communications and Electronics"
                  date="17 Jul"
                  at="Helwan Unversity "
                  desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum culpa delectus, mollitia ipsum nam repellendus, perferendis molestias at lab."
                  icon="fa fa-university"
                />
                <ProfileMainInfoCard
                  title="Communications and Electronics"
                  date="17 Jun"
                  at="Helwan Unversity"
                  desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum culpa delectus, mollitia ipsum nam repellendus, perferendis molestias at lab."
                  icon="fa fa-university"
                />
                <ProfileMainInfoCard
                  title="Communications and Electronics"
                  date="17 Jun"
                  at="Helwan Unversity"
                  desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum culpa delectus, mollitia ipsum nam repellendus, perferendis molestias at lab."
                  icon="fa fa-university"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
