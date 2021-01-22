import React from "react";

const Restaurant = ({ data }) => {
  return (
    <div className="wrapper">
      <div className="resto">
        <div className="resto-info">
          <h1>{data.name}</h1>
          <p style={{ fontSize: 19, color: "grey" }}>{data.description}</p>
        </div>

        <img src={data.picture} alt={data.name} />
      </div>
    </div>
  );
};

export default Restaurant;
