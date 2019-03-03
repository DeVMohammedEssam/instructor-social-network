import React from "react";
import Navbar from "../reusable/Navbar";
import Input from "../reusable/InputField";
const Course = () => {
  return (
    <React.Fragment>
      <Navbar signed={true} />
      <div className="courses">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12  col-md-4 col-lg-3 enroll-course-card">
              <div className="row course-card__content">
                <div className="card__top">
                  <i className="far fa-thumbs-up like" />
                  <img src="/images/course1.jpg" className="courseImg" alt="" />
                </div>
                <div className="wrapper">
                  <div className="d-flex flex-column justify-content-center align-items-center  px-4 w-100">
                    <div className="text">
                      <h5>Software Engineering</h5>
                      <p>
                        Create a model to persist data in Node.Js loopBake API
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Facere, laudantium?
                      </p>
                    </div>
                    <img
                      src="/images/course2.png"
                      className="course-review"
                      alt=""
                    />
                  </div>
                  <div className="course-card__btns-container">
                    <button
                      type="button"
                      className="btn  enroll-course-button"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      Enroll Course
                    </button>
                    <div className="price ">
                      <span>Price:250.0$</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*<!-- Modal -->*/}
            <div
              className="modal fade "
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog " role="document">
                <div className="modal-content p-4">
                  <div className="secure">
                    <span>
                      {" "}
                      <i className="fas fa-lock mr-3 text-muted" />
                      Secure Payment
                    </span>
                  </div>
                  <div className="payment">
                    <div className="price-amount">
                      <span>250.00$</span>
                    </div>
                    <form action="">
                      <Input
                        placeholder="card number"
                        iconclassName="credit-card"
                        name="creditNumber"
                        type="number"
                      />
                      <div className="my-2" />
                      <Input
                        type="text"
                        iconclassName="calendar"
                        placeholder="MM/YY"
                      />
                      <div className="my-2" />
                      <Input
                        type="number"
                        placeholder="cvc"
                        name="cvcNumber"
                        iconclassName={"lock"}
                      />

                      <button type="submit" className="btn ">
                        Confirm Payment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12  col-md-7 col-xl-8 course-description">
              <div className="full-description">Full description</div>
              <p className="full-description-p1 pl-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s
              </p>
              <div className="part-one">Part One</div>
              <p className="full-description-p2 pl-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s
              </p>
              <div className="part-two">Part Two</div>
              <p className="full-description-p3 pl-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s
              </p>
              <div className="float-right mr-3">
                <button className="view-comments">
                  <i className="fas fa-chevron-down" />
                  View Comments
                </button>
              </div>
              <div className="clearfix" />
              <div className="comments text-center">comments...</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Course;
