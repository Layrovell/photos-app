import React, {useState} from 'react';
import './CharactersFilter.scss';
import {Select} from "../../Select/Select";

const arrayOptions = [
  "All",
  "Unknown",
  "Dead",
  "Alive",
]

export const CharactersFilter = ({handleFilter}) => {
  const [filter, setFilter] = useState({
    status: '',
    species: '',
    gender: '',
  });

  return (
    <div className="field is-flex is-justify-content-center">

      <Select arrayOptions={arrayOptions} />

      <select
        className="char-select"
      >
        <option value="">All (species)</option>
        <option value="Poopybutthole">Poopybutthole</option>
        <option value="unknown">Unknown</option>
        <option value="Animal">Animal</option>
        <option value="Disease">Disease</option>
        <option value="Cronenberg">Cronenberg</option>
        <option value="Robot">Robot</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
        <option value="Humanoid">Humanoid</option>
      </select>

      <select
        className="char-select"
      >
        <option value="">All (status)</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown</option>
      </select>

      <select
        className="char-select"
      >
        <option value="">All (gender)</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};
