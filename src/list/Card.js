import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/list")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="card-container">
      {data.map((data) => (
        <div className="card text-bg-dark" id="food" key={data.id}>
          <img src={`${process.env.PUBLIC_URL}/essen/${data.thumbnail}`} alt="rezeptBild" />
          <div className="card-img-overlay d-flex flex-column justify-content-end">
            <div className="overlayBackground">
              <h5 className="card-title"><NavLink to={`/details/${data.id}`}>{data.dish_name}</NavLink></h5>
              <p className="card-text">{data.description_short}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}