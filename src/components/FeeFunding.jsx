import React from "react";
import VerticalBreadcrumbs from "./VerticalBreadcrumbs";
const FeeFunding  = () => {
  const items = [
    { id:1,
        title:"Program Fee",
    content:"The total course fee for this program is:"
    },
    { id:2,
        title:"INR 1,00,000* Plus GST ",
    content:"*Sectheta reserves the right to alter the amount indicated the fee structure above."
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <VerticalBreadcrumbs items={items} />
    </div>
  );
};

export default FeeFunding ;
