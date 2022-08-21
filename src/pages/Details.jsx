import { useParams, useNavigate } from "react-router-dom";
import { useCountryContext } from "../components/Context/Context";
import NotFound from "./NotFound";
export const Details = () => {
  const { country } = useCountryContext();

  const { countryName } = useParams();

  const countryData = country.find(
    (country) => country.name.common.toLowerCase() === countryName
  );
  const {
    capital,
    flags,
    region,
    languages,
    currencies,
    population,
    name: { common },
  } = countryData;

  const navigate = useNavigate();
  return countryData ? (
    <section className="detailsContainer">
      <div>
        <img className="country__img" src={flags.png} alt={common} />
      </div>

      <h3 className="country__name">{capital}</h3>
      <h4 className="country__region">Region:{region}</h4>
      <p className="country__row">
        Language:
        {languages ? Object.values(languages)[0] : ""}
      </p>
      <p className="country__row">
        Currencies:
        {currencies ? Object.values(currencies)[0].name : ""}
      </p>
      <p className="country__row">
        Polulation:
        {population ? +(population / 1000000).toFixed(1) : ""}million
      </p>
      <button className="goBackBtn" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </section>
  ) : (
    <NotFound />
  );
};
