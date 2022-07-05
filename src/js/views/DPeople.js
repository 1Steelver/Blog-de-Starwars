import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
const DPeople = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log("ACTIONS");
  useEffect(() => {
    actions.charaInfo(params.uid);
  }, []);
  const index = params.uid - 1;
  return (
    <div>
      <div className="d-flex">
        <img height={300} width={450} src={store.imgCharacters[index].url} />
        <div>
          <h1 className="container text-center">{store.pjActual.name}</h1>
        <p className="container text-center py-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo
          augue, tristique id nisl ut, consequat luctus felis. Nunc egestas,
          lacus eu pharetra eleifend, ante felis tempus mi, vel tempus felis
          nulla facilisis lorem. In hac habitasse platea dictumst. Aenean ornare
          semper magna sit amet volutpat. Vivamus odio enim, faucibus a turpis
          venenatis, vestibulum dictum ex. Nulla sed porttitor ipsum, quis
          lobortis libero. Suspendisse iaculis eleifend ante, in scelerisque
          nibh ornare a. Vestibulum id erat augue. Aliquam vel fringilla lorem,
          sed rutrum ex. Donec in tortor venenatis lacus cursus faucibus. Aenean
          ut consectetur diam. Etiam rhoncus tincidunt sagittis. Duis dapibus
          rhoncus imperdiet. Nulla quis tincidunt ipsum. Ut at leo sollicitudin,
          mattis elit id, lobortis ex.
        </p>
        </div>
        
      </div>
      
      <div className="d-flex">
        <p className="m-3">Height: {store.pjActual.height}</p>
        <p className="m-3">Mass: {store.pjActual.mass}</p>
        <p className="m-3">Skin Color: {store.pjActual.skin_color}</p>
        <p className="m-3">Eye Color: {store.pjActual.eye_color}</p>
        <p className="m-3">Year of birth: {store.pjActual.birth_year}</p>
        <p className="m-3">Gender: {store.pjActual.gender}</p>
      </div>
    </div>
  );
};

export default DPeople;
