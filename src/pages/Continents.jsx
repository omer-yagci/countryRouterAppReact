import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCountryContext } from "../components/Context/Context";
const Continents = () => {
  const { regionName } = useParams;
  const { country } = useCountryContext();
  return (
    <section className="continentsPageContainer">
      {country?.map((country, index) => {
        const {
          name: { official, common },
          flags,
          region,
        } = country;
        return region === regionName ? (
          <Link to={`${region}/${official}`}>
            <div className="conteinetCard" key={index}>
              <h3>{official}</h3>
              <div>
                <img src={flags.png} alt={common} />
              </div>
            </div>
          </Link>
        ) : (
          <div>
            <h1>asdasd</h1>
          </div>
        );
      })}
    </section>
  );
};

export default Continents;
