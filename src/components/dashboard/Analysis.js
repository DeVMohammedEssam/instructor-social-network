import React from "react";
import LineChart from "../Charts/LineChart";
import AnalysisCard from "../Cards/AnalysisCard";
import RankCard from "../Cards/RankCard";
class Analysis extends React.Component {
  constructor(props) {
    super(props);
  
  }
 

  render() {
    return (
      <div className="row">
        <div className="col-md-7">
          <div className="card card__charts">
            <LineChart
              header="users number"
              description="number off students through this year"
              data={[0, 10, 5, 2, 20, 30, 45]}
              labels={[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July"
              ]}
            />
          </div>
          <div className="row">
            <div className="col-md-4">
              <AnalysisCard
                title="students"
                icon="fa fa-user-graduate fa-2x"
                data="2,240"
              />
            </div>
            <div className="col-md-4">
              <AnalysisCard
                title="views"
                icon="fa fa-chalkboard-teacher fa-2x"
                data="5,475"
              />
            </div>
            <div className="col-md-4">
              <AnalysisCard
                title="courses"
                icon="fa fa-book fa-2x"
                data="123"
              />
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card analyis__rank">
            <RankCard
              height={500}
              top_index={2}
              heads={["#", "University", "numbers"]}
              data_row={[
                ["Helwan", "2,444"],
                ["Cairo", "2,444"],
                ["Ain Shams", "2,444"],
                ["alex", "2,444"],
                ["assuit", "2,444"],
                ["mania", "2,444"]
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Analysis;
