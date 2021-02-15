import React, {useEffect, useState} from 'react';
import {Pagination} from "../Pagination/Pagination";
import {makeOptions} from "../../Helpers/makeOptions";
import {Select} from "../Select/Select";

export const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [locQuery, setLocQuery] = useState('');

  const [totalPages, setTotalPages] = useState(0);
  const [cardsAmount, setCardsAmount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [prevPage, setPrevPage] = useState('');
  const [nextPage, setNextPage] = useState('');

  const [filteredOptions, setFilteredOptions] = useState({ dimension: '', type: '' });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location/?page=${currentPage}`)
      .then(res => res.json())
      .then(loc => {
        if (loc.info.next) {
          setNextPage(loc.info.next)
        } else {
          setNextPage('')
        }
        if (loc.info.prev) {
          setPrevPage(loc.info.prev)
        } else {
          setPrevPage('')
        }

        setTotalPages(loc.info.pages);
        setLocations(loc.results);
        setCardsAmount(loc.info?.count);
      })
      .catch(err => console.log(err))
  }, [currentPage]);

  const onHandleQuery = (e) => setLocQuery(e.target.value);

  const searchLocation = () => {
    const searchQuery = locQuery.toLocaleLowerCase().trim();
    const filteredLocations = locations
      .filter(l => l.name.toLocaleLowerCase().includes(searchQuery));

    return filteredLocations;
  };

  useEffect(() => {
    const { dimension, type } = filteredOptions;
    const dimensionQuery = dimension && dimension !== 'All' ? '&dimension=' + dimension : '';
    const typeQuery = type && type !== 'All' ? '&type=' + type : '';

    const result = fetch(`https://rickandmortyapi.com/api/location/?page=${dimensionQuery}${typeQuery}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setLocations(data.results);
      });

    console.log(result);
  }, [filteredOptions]);

  console.log(locations);

  const dimensionOptions = makeOptions(locations, 'dimension');
  const typeOptions = makeOptions(locations, 'type');

  useEffect(() => {
    let temp = [...locations];
    const options = Object.values(filteredOptions).filter(el => el !== 'All');

    if (options.length) {
      options.forEach(el => {
        temp = temp.filter(t => t)
      })
    }

  }, [filteredOptions])

  return (
    <div className="container">
      <h2 className="py3 text-shadow">Locations:</h2>
      <p className="container__info py1">Found locations: {cardsAmount || "0"}</p>
      <p className="container__info py1">Found pages: {totalPages || "0"}</p>

      <div className="py1">
        <input
          value={locQuery}
          onChange={onHandleQuery}
          className="locations__input"
          type="text"
          placeholder="name..."
        />
      </div>

      <div className="select__box">
        <Select
          callback={setFilteredOptions}
          name='type'
          arrayOptions={typeOptions}
          classNames="char-select mr-2"
        />
        <Select
          callback={setFilteredOptions}
          name='dimension'
          arrayOptions={dimensionOptions}
          classNames="char-select mr-2"
        />
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />

      {cardsAmount > 0 && (
        <table className="highlight">
          <thead className="green accent-3">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Dimension</th>
          </tr>
          </thead>
          {searchLocation().map(ep => (
            <>
              <tbody>
              <tr>
                <td>{ep.id}</td>
                <td>{ep.name}</td>
                <td>{ep.type}</td>
                <td>{ep.dimension}</td>
              </tr>
              </tbody>
            </>
          ))}
        </table>
      )}
    </div>
  );
};
