import React, {useEffect, useState} from 'react';
import {getLocation} from '../../api/api';
import './Locations.scss';
import {Pagination} from "../Pagination/Pagination";

export const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [locQuery, setLocQuery] = useState('');

  useEffect(async () => {
    try {
      const locations = await getLocation();

      setLocations(locations);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onHandleQuery = (e) => {
    setLocQuery(e.target.value);
    console.log('query: ' + locQuery);
  };

  const searchLocation = () => {
    const searchQuery = locQuery.toLocaleLowerCase().trim();
    const filteredLocations = locations
      .filter(l => l.name.toLocaleLowerCase().includes(searchQuery));

    return filteredLocations;
  }

  console.log(locations);

  return (
    <section className="locations">
      <div className="locations__container">
        <h1 className="section__title">Locs:</h1>

        <div className="locations__form">
          <input
            value={locQuery}
            onChange={onHandleQuery}
            className="locations__input"
            type="text"
            placeholder="name..."
          />

          <div className="mx-6">
            <select className="locations__select">
              <option value="all">all</option>
              <option value="Planet">Planet</option>
              <option value="Dream">Dream</option>
              <option value="Space station">Space station</option>
              <option value="Fantasy town">Fantasy town</option>
              <option value="Resort">Resort</option>
              <option value="TV">TV</option>
              <option value="Microverse">Microverse</option>
              <option value="Cluster">Cluster</option>
            </select>
          </div>

          <div className="">
            <select className="locations__select">
              <option value="all">all</option>
              <option value="Cronenberg Dimension">Cronenberg Dimension</option>
              <option value="unknown">unknown</option>
              <option value="Replacement Dimension">Replacement Dimension</option>
              <option value="Fantasy Dimension">Fantasy Dimension</option>
              <option value="Dimension 5-126">Dimension 5-126</option>
              <option value="Dimension C-137">Dimension C-137</option>
              <option value="Post-Apocalyptic Dimension">Post-Apocalyptic Dimension</option>
            </select>
          </div>
        </div>

        {/*<Pagination />*/}

        <table className="locations__table table is-striped is-narrow is-hoverable">
          <thead>
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

      </div>
    </section>
  );
};
