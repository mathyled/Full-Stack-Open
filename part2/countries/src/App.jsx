import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css"
function App() {
  const [inputFilter, setInputFilter] = useState("");
  const [countries, setCountries] = useState([
    { name: { common: "Finladia" } },
    { name: { common: "Argentina" } },
  ]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => setCountries(response.data));
  }, []);

  const handlerFilterInput = (e) => {
    setInputFilter(e.target.value);
    if (countryToShow !== null) {
      setSelectedCountry(null);
    }
  };

  const handleShow = (country) => {
    setSelectedCountry(country);
  };

  const seletedCountries =
    inputFilter.trim() === ""
      ? []
      : countries.filter((country) =>
          country.name.common.toLocaleLowerCase().includes(inputFilter)
        );

  const countryToShow =
    selectedCountry ||
    (seletedCountries.length === 1 ? seletedCountries[0] : null);
  // console.log(selectedCountry);

  {
    if (seletedCountries.length > 10) {
      return (
        <>
          <p>
            find countries{" "}
            <input
              className="filter"
              type="text"
              onChange={handlerFilterInput}
              value={inputFilter}
            />
          </p>
          <p>Too many matches, specify another filter</p>
        </>
      );
    } else if (countryToShow) {
      const country = countryToShow;
      return (
        <>
          <p>
            find countries{" "}
            <input
              type="text"
              onChange={handlerFilterInput}
              value={inputFilter}
            />
          </p>

          <h2>{country.name.common}</h2>
          <p>Capital: {country.capital}</p>
          <p>Area: {country.area}</p>
          <h2>Languages</h2>
          <ul>
            {country.languages &&
              // country.languages es {"eng": "English","swa": "Swahili"}
              Object.values(country.languages).map(
                (
                  language // -> ['English', 'Swahili']
                ) => <li key={language}>{language}</li>
              )}
          </ul>
          <img src={country.flags.png} alt={country.flags.png} />
        </>
      );
    } else {
      return (
        <>
          <p>
            find countries{" "}
            <input
              type="text"
              onChange={handlerFilterInput}
              value={inputFilter}
            />
          </p>

          <ul>
            {seletedCountries.map((country) => (
              <li key={country.area}>
                {country.name.common}{" "}
                <button
                  value={country.name.common}
                  onClick={() => handleShow(country)}
                >
                  Show
                </button>{" "}
              </li>
            ))}
          </ul>
        </>
      );
    }
  }
}

export default App;
