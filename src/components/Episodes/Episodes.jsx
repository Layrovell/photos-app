import React, {useState, useEffect} from 'react';
import './Episodes.scss';
import {getEpisodes} from '../../api/api';
import {Pagination} from "../Pagination/Pagination";

export const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [episodesQuery, setEpisodesQuery] = useState('');

  useEffect(async () => {
    try {
      const episodes = await getEpisodes();

      setEpisodes(episodes);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onHandleQuery = (e) => {
    setEpisodesQuery(e.target.value);

    console.log(episodesQuery);
  }

  const searchEpisode = () => {
    const searchQuery = episodesQuery.toLocaleLowerCase().trim();
    const filteredEpisodes = episodes
      .filter(t => t.name.toLocaleLowerCase().includes(searchQuery));

    return filteredEpisodes;
  }

  console.log(episodes);

  return (
    <section className="section">
      <article className="episodes__list--items">

        <h1 className="section__title">Episodes:</h1>

        <input
          value={episodesQuery}
          onChange={onHandleQuery}
          className="episodes__input"
          type="text"
          placeholder="search by name..."
        />

        {/*<Pagination />*/}

        <table className="episodes__table table is-striped is-narrow is-hoverable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Episode</th>
              <th>Name</th>
              <th>Air Date</th>

            </tr>
          </thead>
          {searchEpisode().map(ep => (
            <>
              <tbody>
                <tr>
                  <td>{ep.id}</td>
                  <td>{ep.episode}</td>

                  <td>{ep.name}</td>
                  <td>{ep.air_date}</td>
                </tr>
              </tbody>
            </>
          ))}
        </table>

      </article>
    </section>
  );
};
