import React from "react";
import "./MainContainer.scss";

const MainContainerHome = ({ content, sidebar }) => (
  <section className="container">
    <div className="content-wrapper padding-top-half padding-bottom-2">
      {content}
    </div>
  </section>
);

export default MainContainerHome;
