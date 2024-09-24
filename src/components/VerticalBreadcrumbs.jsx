import React from "react";
import "./VerticalBreadcrumbs.css"; // Import the CSS file

const VerticalBreadcrumbs = ({ items }) => {
  return (
    <div className="vertical-breadcrumbs">
      {items.map((item, index) => (
        <div key={index} className="">
        <div key={index} className="breadcrumb-item">
          <div className="breadcrumb-circle"></div>
          <div className="breadcrumb-title"><b>{item.title}</b></div>
        </div>
        <div key={index} className="breadcrumb-content">
          {item.id !== 1 && <div className="breadcrumb-line"></div>}
          <div className="breadcrumb-text">{item.content}</div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalBreadcrumbs;
