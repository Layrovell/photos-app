import React, {useState, useEffect} from 'react';
import {Pagination} from "../Pagination/Pagination";

export const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [episodesQuery, setEpisodesQuery] = useState('');

  const [totalPages, setTotalPages] = useState(0);
  const [cardsAmount, setCardsAmount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [prevPage, setPrevPage] = useState('');
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/?page=${currentPage}`)
      .then(res => res.json())
      .then(el => {
        if (el.info.prev) {
          setPrevPage(el.info.prev)
        } else {
          setPrevPage('')
        }
        if (el.info.next) {
          setNextPage(el.info.next)
        } else {
          setNextPage('')
        }

        setTotalPages(el.info.pages);
        setEpisodes(el.results);
        setCardsAmount(el.info?.count);
      })
      .catch(err => console.log(err))
  }, [currentPage]);

  const onHandleQuery = (e) => setEpisodesQuery(e.target.value);

  const searchEpisode = () => {
    const searchQuery = episodesQuery.toLocaleLowerCase().trim();
    const filteredEpisodes = episodes
      .filter(t => t.name.toLocaleLowerCase().includes(searchQuery));

    return filteredEpisodes;
  }

  return (
    <div className="container">
      <h2 className="py3 text-shadow">Episodes:</h2>
      <p className="container__info py1">Found episodes: {cardsAmount || "0"}</p>
      <p className="container__info py1">Found pages: {totalPages || "0"}</p>

      <div className="py1">
        <input
          value={episodesQuery}
          onChange={onHandleQuery}
          className="episodes__input"
          type="text"
          placeholder="search by name..."
        />
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalPages={totalPages}
      />

      <table className="highlight">
        <thead className="green accent-3">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Episode</th>
          <th>Air Date</th>
        </tr>
        </thead>
        {searchEpisode().map(ep => (
          <>
            <tbody>
            <tr>
              <td>{ep.id}</td>
              <td>{ep.name}</td>
              <td>{ep.episode}</td>
              <td>{ep.air_date}</td>
            </tr>
            </tbody>
          </>
        ))}
      </table>
    </div>
  );
};
