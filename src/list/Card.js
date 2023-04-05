import React, { useState } from 'react';
import Rezepte from './MockData';

export default function Card() {
  const [data, setData] = useState(Rezepte);

  return (
    <div className='card-container'>
      {data.map((rezept) => (
        <div className="card text-bg-dark" id="food" key={rezept.id}>
          <img src={rezept.bild} alt="rezeptBild" />
          <div className="card-img-overlay d-flex flex-column justify-content-end">
            <div className="overlayBackground">
              <h5 className="card-title">{rezept.name}</h5>
              <p className="card-text">{rezept.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
