import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
const DPlanets = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log("ACTIONS");

  useEffect(() => {
    actions.planetInfo(params.uid);
  }, []);
  const index = params.uid - 1;
  return (
    <div>
      <div className="d-flex">
      <img height={300} width={450} src={store. imgPlanets[index].url} />
      <div>
      <h1 className="container text-center">{store.planetaActual.name}</h1>
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
        <p className="m-3">Diameter: {store.planetaActual.diameter}</p>
        <p className="m-3">
          Rotation Period: {store.planetaActual.rotation_period}
        </p>
        <p className="m-3">
          Orbital Period: {store.planetaActual.orbital_period}
        </p>
        <p className="m-3">Gravity: {store.planetaActual.gravity}</p>
        <p className="m-3">Population: {store.planetaActual.population}</p>
      </div>
    </div>
  );
};

export default DPlanets;
