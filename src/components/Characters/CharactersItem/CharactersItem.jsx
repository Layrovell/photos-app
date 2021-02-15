import React, {useEffect, useState} from 'react';
import {Modal} from '../../Modal/Modal';
import '../Characters.scss';

export const CharactersItem = ({char}) => {
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div title="click to show info" className="card-box" onClick={() => {
        setModalActive(true);
      }}>
        <div className="column card-style">
          <figure>
            <img src={char.image} alt="img"/>
          </figure>
          <div>
            <p className="card-box__name">{char.name}</p>
            <p className="card-box__text">{char.species}</p>
          </div>
        </div>
      </div>

      {modalActive && (
        <Modal
          modalActive={modalActive}
          setModalActive={setModalActive}
          char={char}
        >
          <div className="intro">
            <img className="intro__img" src={char.image} alt="char image"/>
            <div className="intro__content">
              <p className="intro__name">{char.name}</p>
              <hr/>
              <p className="intro__title">
                Gender:
                <span>{char.gender}</span>
              </p>
              <p className="intro__title">
                Species:
                <span>{char.species}</span>
              </p>
              <p className="intro__title">
                Status:
                <span>{char.status}</span>
              </p>
              <p className="intro__title">
                Location:
                <span>{char.location.name}</span>
              </p>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
