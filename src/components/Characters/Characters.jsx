import React, {useEffect, useState} from 'react';
import './Characters.scss';
import {CharactersItem} from "./CharactersItem/CharactersItem";
import {getCharacter} from "../../api/api";
import {CharactersFilter} from "./CharactersFilter/CharactersFilter";
import {Pagination} from "../Pagination/Pagination";
import {Select} from "../Select/Select";
import {makeOptions} from '../../Helpers/makeOptions';

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  // const [currentPage, setCurrentPage] = useState(1);
  // const handlePageChange = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  const [filteredOptions, setFilteredOptions] = useState({
    gender: '',
    status: '',
    species: '',
  });
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    getCharacter()
    .then(result => {
      setCharacters(result);
    })
    .catch(err => console.log(err));
  }, []);

  console.log(characters);

  const genderOptions = makeOptions(characters, 'gender');
  const statusOptions = makeOptions(characters, 'status');
  const speciesOptions = makeOptions(characters, 'species');



  return (
    <section className="section">

      <h1 className="section__title">Characters:</h1>

     <div className="select__box">
       <Select callback={setFilteredOptions} name='gender' arrayOptions={genderOptions} classNames="char-select" />
       <Select callback={setFilteredOptions} name='status' arrayOptions={statusOptions} classNames="char-select" />
       <Select callback={setFilteredOptions} name='species' arrayOptions={speciesOptions} classNames="char-select" />
     </div>

      {/*<Pagination*/}
      {/*  currentPage={currentPage}*/}
      {/*  totalItems={100}*/}
      {/*  pageSize={10}*/}
      {/*  handlePageChange={handlePageChange}*/}
      {/*/>*/}
      {/*<p className="currentPageLabel">Current page in parent: {currentPage}</p>*/}

      <div className="char__list">
        {characters.map(char => (
          <CharactersItem
            char={char}
            key={char.id}
          />
        ))}
      </div>


    </section>
  )
    ;
};
