import React from 'react';
import './Picker.css';

export default function Picker({
  head,
  setHead,
  torso,
  setTorso,
  feet,
  setFeet,
}) {
  const heroes = ['hulk', 'deadpool', 'spiderman', 'captainmarvel'];

  return (
    <div
      className="picker"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginBottom: 10,
      }}
    >
      <label>
        Head
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          {heroes.map((pic) => {
            return <option key={pic}>{pic}</option>;
          })}
        </select>
      </label>
      <label>
        Torso
        <select value={torso} onChange={(e) => setTorso(e.target.value)}>
          {heroes.map((pic) => {
            return <option key={pic}>{pic}</option>;
          })}
        </select>
      </label>
      <label>
        Feet
        <select value={feet} onChange={(e) => setFeet(e.target.value)}>
          {heroes.map((pic) => {
            return <option key={pic}>{pic}</option>;
          })}
        </select>
      </label>
    </div>
  );
}
