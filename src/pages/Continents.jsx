import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCountryContext } from "../components/Context";

const Continents = () => {
  const { regionName } = useParams();
  const { country } = useCountryContext();

  return (
    <section className="continentsPageContainer">
      {country?.map((country, index) => {
        const {
          name: { official, common },
          flags,
          region,
        } = country;
        return (
          region.toLowerCase() === regionName.toLowerCase() && (
            <div key={index} className="conteinetCard">
              <Link
                key={index}
                style={{ textDecoration: "none" }}
                to={`/${region.toLowerCase()}/${common.toLowerCase()}`}
              >
                <h3 className="continentHeader">{common}</h3>
                <div>
                  <img src={flags.png} alt={official} />
                </div>
              </Link>
            </div>
          )
        );
      })}
    </section>
  );
};

export default Continents;
