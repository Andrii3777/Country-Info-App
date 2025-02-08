import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/styles.css";

interface Country {
  countryCode: string;
  name: string;
}

const CountryListPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/countries`)
      .then((response) => setCountries(response.data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div className="country-list-container">
      <h1>Country List</h1>
      <div className="country-grid">
        {countries.map((country) => (
          <Link
            key={country.countryCode}
            to={`/countries/${country.countryCode}`}
            className="country-item text-normal"
          >
            {country.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryListPage;
