import { createContext, useContext, useEffect, useState } from "react";
import { getDataFromAPI } from "../services/AxiosFunction";

// ! Defining context
export const CountryContext = createContext();

// ! Consume function (Custom hook)
export const useCountryContext = () => {
  return useContext(CountryContext);
};

const Context = ({ children }) => {
  const [country, setCountry] = useState([]);
  const URL = `https://restcountries.com/v3.1/all`;

  useEffect(() => {
    getDataFromAPI(URL, setCountry, country);
  }, []);

  const values = { country };
  return (
    <CountryContext.Provider value={values}>{children}</CountryContext.Provider>
  );
};

export default Context;
