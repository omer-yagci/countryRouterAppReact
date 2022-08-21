import axios from "axios";

export const getDataFromAPI = async (URL, setCountry) => {
  try {
    const { data } = await axios.get(URL);
    setCountry(data);
  } catch (error) {
    console.log(error);
  }
};
