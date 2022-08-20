import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// ! Defining context
export const CountryContext = createContext();

// ! Consume function (Custom hook)
export const useCountryContext = () => {
  return useContext(CountryContext);
};

const Context = ({ children }) => {
  const [country, setCountry] = useState([]);
  const URL = `https://restcountries.com/v3.1/name/all`;

  const getDataFromAPI = async () => {
    try {
      const { data } = await axios.get(URL);
      console.log(data);
      setCountry(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataFromAPI();
  }, []);

  const values = { country };
  return (
    <CountryContext.Provider value={values}>{children}</CountryContext.Provider>
  );
};

export default Context;
