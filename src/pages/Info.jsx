import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api/API";
const Info = () => {
  const goBack = useNavigate();
  const { names } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    api.getItem(names).then((res) => setItem(res.data[0]));
  }, [names]);
  console.log(item);
  const {
    name,
    capital,
    population,
    region,
    flag,
    area,
    subregion,
    nativeName,
  } = item;
  return (
    <>
      <div className="info-wrapper mt-4">
        <section className="container">
          <button
            onClick={() => {
              goBack(-1);
            }}
            className="btn btn-danger"
          >
            Back
          </button>
          <div className="info">
            <div className="country-img">
              <img className="info-img w-100" src={flag} alt={name} />
            </div>
            <div className="country-info">
              <ul className="info-list">
                <li className="info-item">
                  <h3>Name</h3> <strong className="info-str">{name}</strong>
                </li>
                <li className="info-item">
                  <h3>Capital</h3>{" "}
                  <strong className="info-str">{capital}</strong>
                </li>
                <li className="info-item">
                  <h3>Population</h3>:{" "}
                  <strong className="info-str">{population}</strong>
                </li>
                <li className="info-item">
                  <h3>Region</h3> :
                  <strong className="info-str">{region}</strong>
                </li>
                <li className="info-item">
                  <h3>Area</h3> :<strong className="info-str">{area}</strong>
                </li>
                <li className="info-item">
                  <h3>Subergion</h3>{" "}
                  <strong className="info-str">{subregion}</strong>
                </li>
                <li className="info-item">
                  <h3>Native name</h3>{" "}
                  <strong className="info-str">{nativeName}</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Info;
