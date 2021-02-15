import React, {useEffect, useState} from 'react';
import './Characters.scss';
import {CharactersItem} from "./CharactersItem/CharactersItem";
import {CharactersFilter} from "./CharactersFilter/CharactersFilter";
import {Pagination} from "../Pagination/Pagination";
import {Select} from "../Select/Select";
import {makeOptions} from '../../Helpers/makeOptions';

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState({gender: '', status: '', species: ''});

  const [totalPages, setTotalPages] = useState(0);
  const [cardsAmount, setCardsAmount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [prevPage, setPrevPage] = useState('');
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then(res => res.json())
      .then(chars => {
        if (chars.info.prev) {
          setPrevPage(chars.info.prev)
        } else {
          setPrevPage('')
        }
        if (chars.info.next) {
          setNextPage(chars.info.next)
        } else {
          setNextPage('')
        }

        setTotalPages(chars.info.pages);
        setCharacters(chars.results);
        setCardsAmount(chars.info?.count);
      })
      .catch(err => console.log(err))
  }, [currentPage]);

  useEffect(() => {
    const { gender, status, species } = filteredOptions;
    const genderQuery = gender && gender !== 'All' ? 'gender=' + gender : '';
    const statusQuery = status && status !== 'All' ? '&status=' + status : '';
    const speciesQuery = species && species !== 'All' ? '&species=' + species : '';

    const response = fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}${genderQuery}${statusQuery}${speciesQuery}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
      });

  }, [filteredOptions]);

  console.log(characters)

  const genderOptions = makeOptions(characters, 'gender');
  const statusOptions = makeOptions(characters, 'status');
  const speciesOptions = makeOptions(characters, 'species');

  useEffect(() => {
    let temp = [...characters];
    const options = Object.values(filteredOptions).filter(el => el !== 'All');

    if (options.length) {
      options.forEach(el => {
        temp = temp.filter(t => t)
      })
    }

  }, [filteredOptions])

  return (
    <div className="container">
      <h2 className="py3 text-shadow">Characters:</h2>
      <p className="container__info py1">Found characters: {cardsAmount || "0"}</p>
      <p className="container__info">Found pages: {totalPages || "0"}</p>

      <div className="select__box">
        <Select
          callback={setFilteredOptions}
          name='gender'
          arrayOptions={genderOptions}
          classNames="char-select mr-2"
        />
        <Select
          callback={setFilteredOptions}
          name='status'
          arrayOptions={statusOptions}
          classNames="char-select mr-2"
        />
        <Select
          callback={setFilteredOptions}
          name='species'
          arrayOptions={speciesOptions}
          classNames="char-select"
        />
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />

      <div className="char__list">
        {characters.map(char => (
          <CharactersItem
            char={char}
            key={char.id}
          />
        ))}
      </div>
    </div>
  );
};
