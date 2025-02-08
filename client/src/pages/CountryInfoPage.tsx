import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../css/styles.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface BorderCountry {
  countryCode: string;
  commonName: string;
}

interface PopulationData {
  year: number;
  value: number;
}

const CountryInfoPage = () => {
  const { countryCode } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [countryInfo, setCountryInfo] = useState<any>(null);

  useEffect(() => {
    if (!countryCode) return;

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/countries/${countryCode}`)
      .then((response) => setCountryInfo(response.data))
      .catch((error) => console.error("Error fetching country info:", error));
  }, [countryCode]);

  if (!countryInfo) return <p>Loading...</p>;

  const populationChartData = {
    labels: countryInfo.population.map((item: PopulationData) => item.year),
    datasets: [
      {
        label: "Population",
        data: countryInfo.population.map((item: PopulationData) => item.value),
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="country-info-container">
      <div className="left-column">
        <h1>{countryInfo.countryName}</h1>
        <img
          src={countryInfo.flag}
          alt={`${countryInfo.countryName} flag`}
          width="200"
        />
        <h2>Border Countries</h2>
        <ul>
          {countryInfo.borders.map((border: BorderCountry) => (
            <li key={border.countryCode}>
              <Link
                to={`/countries/${border.countryCode}`}
                className="text-normal"
              >
                {border.commonName}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="right-column">
        <div className="chart-container">
          <Line data={populationChartData} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default CountryInfoPage;
