import axios from "axios";

export const getAllCountries = async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");

  return response.data;
};

export const getCountryByCode = async (countryCode) => {
  const response = await axios.get(
    `https://restcountries.com/v3.1/alpha/${countryCode}`
  );

  return response.data[0];
};
