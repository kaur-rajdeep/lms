import React from "react";
import VerticalBreadcrumbs from "./VerticalBreadcrumbs";
const Internship  = () => {
  const items = [
    { id:1,
        title:"Guaranteed 12 weeks internship",
    content:"*Upon fullfilling the eligibility criteris & performance evaluation in 100 Hours classroom training, candidates will be offered guaranteed internship."
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <VerticalBreadcrumbs items={items} />
    </div>
  );
};

export default Internship ;
