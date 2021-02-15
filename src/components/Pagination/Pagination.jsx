import React from 'react';
import './pagination.scss';
import classNames from "classnames";

export const Pagination = ({currentPage, setCurrentPage, totalPages}) => {
  return (
    <ul className="pagination py1">
      <li className={classNames("waves-effect", {"waves-effect disabled": (currentPage < 2)})}>
        <a
          onClick={(event) => {
            event.preventDefault();
            if (currentPage > 1) {
              setCurrentPage(currentPage => currentPage - 1);
            }
          }}
        >
          prev
        </a>
      </li>

      {currentPage > 1 && (
        <li>
          <a onClick={() => setCurrentPage(1)}>
            1
          </a>
        </li>
      )}

      {currentPage > 3 && "..."}

      {currentPage > 2 &&
      <li className="waves-effect">
        <a onClick={() => setCurrentPage(currentPage - 1)}>
          {currentPage - 1}
        </a>
      </li>
      }

      <li className="waves-effect active">
        <a className="amber">
          {currentPage}
        </a>
      </li>

      {(currentPage < totalPages - 1) &&
      <li className="waves-effect">
        <a onClick={() => setCurrentPage(currentPage + 1)}>
          {currentPage + 1}
        </a>
      </li>
      }

      {(currentPage < totalPages - 2) && "..."}

      {currentPage < totalPages &&
      <li className="waves-effect">
        <a onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </a>
      </li>
      }

      <li className={classNames("waves-effect", {"waves-effect disabled": (totalPages <= currentPage)})}>
        <a
          onClick={(event) => {
            event.preventDefault();
            if (currentPage < totalPages) {
              setCurrentPage(currentPage => currentPage + 1);
            }
          }}
        >
          next
        </a>
      </li>
    </ul>
  );
};
