import * as React from "react";

export const Dev = () => {
  return (
    <div className="row ml-2  mr-2 ">
      <div className="col-6 ">
        <div className="row cls justifiy-content-between">
          <div className="col-5 m-2 rounded bg-primary">
            <h5>Primary</h5>
            <p>#4e73df</p>
          </div>
          <div className="col-5 m-2 rounded bg-success ">
            <h5>Success</h5>
            <p>#1cc88a</p>
          </div>
        </div>
        <div className="row">
          <div className="col-5 m-2 rounded bg-info">
            <h5>Info</h5>
            <p>#36b9cc</p>
          </div>
          <div className="col-5 m-2 rounded bg-warning">
            <h5>Warning</h5>
            <p>#f6c23e</p>
          </div>
        </div>
        <div className="row">
          <div className="col-5 m-2 rounded bg-danger">
            <h5>Danger</h5>
            <p>#e74a3b</p>
          </div>
          <div className="col-5 m-2 rounded bg-secondary">
            <h5>Secondary</h5>
            <p>#858796</p>
          </div>
        </div>
        <div className="row">
          <div className="col-5 m-2 rounded bg-light">
            <h5>Light</h5>
            <p>#f8f9fc</p>
          </div>
          <div className="col-5 m-2 rounded bg-dark">
            <h5>Dark</h5>
            <p></p>#5a5c69
          </div>
        </div>
      </div>
      <div className="col-6 rounded  bg-white">
        <div className="row m-1">
          <p className="chart-title">Development Approach</p>
          <hr />
        </div>
        <div className="row">
          <p className="m-3">
            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in
            order to reduce CSS bloat and poor page performance. Custom CSS
            classes are used to create custom components and custom utility
            classes. Before working with this theme, you should become familiar
            with the Bootstrap framework, especially the utility classes.
          </p>
        </div>
      </div>
    </div>
  );
};
