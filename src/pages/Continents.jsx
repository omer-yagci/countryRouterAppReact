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
          <div className="conteinetCard" key={index}>
            <Link
              key={index}
              style={{ textDecoration: "none" }}
              to={`${region.toLowerCase()}/${official.toLowerCase()}`}
            >
              <h3 className="continentHeader">{common}</h3>
              <div>
                <img src={flags.png} alt={common} />
              </div>
            </Link>
          </div>
        ) : (
          <></>
        );
      })}
    </section>
  );
};

export default Continents;
