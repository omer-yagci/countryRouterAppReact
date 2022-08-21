import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCountryContext } from "../components/Context/Context";
const Continents = () => {
  const { regionName } = useParams();
  console.log(regionName);
  const { country } = useCountryContext();
  return (
    <section className="continentsPageContainer">
      {country.map((country, index) => {
        const {
          name: { official, common },
          flags,
          region,
        } = country;
        return region.toLowerCase() === regionName.toLowerCase() ? (
          <Link
            style={{ textDecoration: "none" }}
            to={`${region.toLowerCase()}/${official.toLowerCase()}`}
          >
            <div className="conteinetCard" key={index}>
              <h3>{official}</h3>
              <div>
                <img src={flags.png} alt={common} />
              </div>
            </div>
          </Link>
        ) : (
          <></>
        );
      })}
    </section>
  );
};

export default Continents;
