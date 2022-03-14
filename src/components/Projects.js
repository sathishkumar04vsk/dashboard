import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export const Projects = () => {
  return (
    <div className="row m-2">
      <div className="col-lg-6 ">
        <div className="p-2 rounded bg-white">
          <div className="row ml-2">
            <p className="chart-title">Projects</p>
          </div>
          <hr />
          <LinearProgress
            sx={{ height: 8, borderRadius: 5 }}
            className="pro p-2 m-5"
            color="error"
            variant="determinate"
            value={20}
          />
          <LinearProgress
            sx={{ height: 8, borderRadius: 5 }}
            className="pro p-2 m-5"
            color="warning"
            variant="determinate"
            value={40}
          />
          <LinearProgress
            sx={{ height: 8, borderRadius: 5 }}
            className="pro p-2 m-5"
            variant="determinate"
            value={60}
          />
          <LinearProgress
            sx={{ height: 8, borderRadius: 5 }}
            className="pro p-2 m-5"
            color="secondary"
            variant="determinate"
            value={80}
          />
          <LinearProgress
            sx={{ height: 8, borderRadius: 5 }}
            className="pro p-2 m-5"
            color="success"
            variant="determinate"
            value={100}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="row rounded bg-white">
          <div className="row m-1">
            <p className="chart-title">Illustrations</p>
            <hr />
          </div>

          <img
            className="response-img"
            src="https://images.tech.co/wp-content/uploads/2015/01/responsive-web-design.jpg"
            alt="responsive design"
          />
          <p className="m-3">
            Add some quality, svg illustrations to your project courtesy of
            unDraw, a constantly updated collection of beautiful svg images that
            you can use completely free and without attribution!
          </p>
        </div>
      </div>
    </div>
  );
};
