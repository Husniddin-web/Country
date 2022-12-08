import React from "react";
import { Link } from "react-router-dom";

const index = ({ data }) => {
  const { name, population, nativeName, region, flag, capital } = data;
  return (
    <>
      <Link to={`/country/${name}`}>
        <div className="card p-2">
          <div className="card-img">
            <img src={flag} alt={name} />
            <h3 className="text-center mt-2">{name} </h3>
          </div>
          <div className="card-body">
            <ul className="card-list">
              <li className="card-item">
                <strong>Population</strong>: {population}
              </li>
              <li className="card-item">
                <strong>Capital</strong>: {capital}
              </li>
              <li className="card-item">
                <strong>Native name</strong> :{nativeName}
              </li>
              <li className="card-item">
                <strong>Region</strong> :{region}
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};

export default index;
