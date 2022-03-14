import * as React from "react";
import LineCharts from "./charts";
import { Earn } from "./Earn";
import { Dev } from "./Dev";
import { Projects } from "./Projects";

export const Dashboard = () => {
  return (
    <div>
      <Earn />
      <LineCharts />
      <Projects />
      <Dev />
    </div>
  );
};
