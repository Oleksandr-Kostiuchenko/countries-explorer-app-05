import style from "./CountryDetails.module.css";
import { getCountryByCode } from "../../fetchData";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

import { FaInfoCircle } from "react-icons/fa";

const CountryDetails = () => {
  const { cca } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCountryByCode(cca);
        setCountry(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [cca]);

  if (!country) {
    return;
  }

  return (
    <>
      {country && (
        <div className={style.countryDetails}>
          <a
            className={style.countryTitle}
            target="_blank"
            href={country.maps.googleMaps}
          >
            {country.name.common}
          </a>
          <div className={style.contentWrapper}>
            <div className={style.infoWrapper}>
              <p>Capital: {country.capital}</p>
              <p>Region: {country.region}</p>
              <p>Population: {country.population}</p>
            </div>
            <img
              className={style.countryFlag}
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
            />
          </div>
        </div>
      )}

      <nav className={style.navItem}>
        <ul>
          <li>
            <NavLink to="borders">
              <FaInfoCircle />
              Borders
            </NavLink>
          </li>
          <li>
            <NavLink to="languages">
              <FaInfoCircle />
              Languages
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet
        context={{ borders: country.borders, languages: country.languages }}
      />
    </>
  );
};

export default CountryDetails;
