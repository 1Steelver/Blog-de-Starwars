import React, { useState, useContext } from "react";
import "../../styles/home.css";
import Card from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.characters);
  //actions.verPersona(id)
  return (
    <div className="mt-5 container">
      <div className="overflow-x">
        <h1 className="text-danger">Characters</h1>
        <div className=" d-flex">
          {store.characters.map((element, index) => {
            return <Card key={element.uid} typeCard="characters" name={element.name} id={element.uid} url={store.imgCharacters[index].url} className="col-3" />
          })}
          
        </div>
      </div>
      <h1 className="text-danger">Planets</h1>
      <div className=" d-flex">
          {store.planets.map((element, index) => {
            return <Card key={element.uid} typeCard="planets" name={element.name} id={element.uid} url={store.imgPlanets[index].url} className="col-3" />
          })}
          
        </div>
    </div>
  );
};
