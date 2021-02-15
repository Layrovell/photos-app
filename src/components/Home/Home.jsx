import React from 'react';
import ReactPlayer from "react-player";

export const Home = () => {
  return (
    <div className="container">
      <h1 className="section__title">New season:</h1>

      <ReactPlayer
        controls
        width="720px"
        height="480px"
        url="https://youtu.be/E6TUs69Cw94"
      />
    </div>
  );
};
