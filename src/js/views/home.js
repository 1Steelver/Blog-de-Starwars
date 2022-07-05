import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container testimonial-group">
      <div className="row text-center">
      <h1 className="text-danger">Characters</h1>
        {store.people.map((item, index) => (
          <div className="col-sm-6 card-container" key={index}>
            <Cards
              url={item.url}
              indice={index}
              properties={item.properties}
              title={item.name}
              uid={item.uid}
              charaInfo={true}
              isFavorite={false}
            ></Cards>
          </div>
        ))}
      </div>

      <div className="row text-center mt-5">
        <h1 className="text-danger">Planets</h1>
        {store.planets.map((item, index) => (
          <div className="col-sm-6 card-container" key={index}>
            <Cards
              url={item.url}
              indice={index}
              properties={item.properties}
              title={item.name}
              uid={item.uid}
              planetInfo={true}
              isFavorite={false}
            ></Cards>
          </div>
        ))}
      </div>
    </div>
  );
};
