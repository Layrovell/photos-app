import React from 'react';
import './CharactersFilter.scss';
import {Select} from "../../Select/Select";

const arrayOptions = [
  "All",
  "Unknown",
  "Dead",
  "Alive",
]

export const CharactersFilter = () => {
  return (
    <div className="">
      <Select arrayOptions={arrayOptions} />
    </div>
  );
};
