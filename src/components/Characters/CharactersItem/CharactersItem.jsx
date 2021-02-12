import React, {useEffect, useState} from 'react';
import {Modal} from '../../Modal/Modal';
import '../Characters.scss';

export const CharactersItem = ({char}) => {
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="sss" onClick={() => {
        setModalActive(true);
      }}>
        <div className="column card-style">
          <figure>
            <img src={char.image} alt="img"/>
          </figure>
          <div className="card-text">
            <p className="card__name">{char.name}</p>
            <p>{char.species}</p>
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
            <div className="intro__content">
              <p className="intro__timezone">{char.name}</p>
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
