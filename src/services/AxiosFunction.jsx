import axios from "axios";
import ErrorPage from "../pages/ErrorPage";

export const getDataFromAPI = async (URL, setCountry, country) => {
  if (!country) {
    return <ErrorPage />;
  } else {
    try {
      const { data } = await axios.get(URL);
      setCountry(data);
    } catch (error) {
      console.log(error);
    }
  }
};
