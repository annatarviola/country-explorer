import React from "react";

import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  const currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      <h3>{currentDisplay.name.common}</h3>
      <h3>{currentDisplay.name.official}</h3>

      <table className="overview-table">
        <tr>
          <td>Continent: </td>
          {currentDisplay.continents.map((e) => (
            <td>{e}</td>
          ))}
        </tr>
        <tr>
          <td>Capital: </td>
          {currentDisplay.capital.map((e) => (
            <td>{e}</td>
          ))}
        </tr>
        <tr>
          <td>Population: </td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td>Independent: </td>
          {currentDisplay.independent ? <td>Yes</td> : <td>No</td>}
        </tr>
        <tr>
          <td>Landlocked: </td>
          {currentDisplay.landlocked ? <td>Yes</td> : <td>No</td>}
        </tr>
        <tr>
          <td>UN Member: </td>
          {currentDisplay.unMember ? <td>Yes</td> : <td>No</td>}
        </tr>
      </table>
    </div>
  );
};

export default Overview;
