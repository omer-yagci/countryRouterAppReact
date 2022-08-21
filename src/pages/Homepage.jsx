import { continents } from "../util/data";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homePageContainer">
      {continents?.map((continent, index) => {
        const { image, name } = continent;
        return (
          <Link
            style={{ textDecoration: "none" }}
            to={`/${name.toLowerCase()}`}
          >
            <div key={index} className="homePageContitentsCard">
              {image}
              <h5>{name}</h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Homepage;
