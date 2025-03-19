import { useEffect, useState } from "react";
import style from "./Countries.module.css";
import { IoIosArrowForward } from "react-icons/io";

//* Fetch function
import { getAllCountries } from "../../fetchData"; // Убедитесь, что импорт правильный
import { NavLink } from "react-router-dom";

const Countries = () => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCountries(); // Исправлено

        setCountriesData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {countriesData && (
        <ul className={style.countryList}>
          {countriesData.map((element) => (
            <li className={style.countryElement} key={element.cca3}>
              <p>{element.name.common}</p>
              <NavLink to={`/countries/${element.cca3}`}>
                <IoIosArrowForward />
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Countries;
