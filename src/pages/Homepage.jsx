import React from "react";
import { continents } from "../util/data";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homePageContainer">
      {continents?.map((item, index) => {
        const { image, name } = item;
        return (
          <div key={index} className="homePageContitentsCard">
            <Link to={`${name}`}>
              {image}
              <h5>{name}</h5>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
