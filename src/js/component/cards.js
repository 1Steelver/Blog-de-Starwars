import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = (props) => {
  const { store, actions } = useContext(Context);
  console.log(actions)
  const click = () => {
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </div>
    );
  };
  useEffect(() => {
    if (props.charaInfo) {
      actions.getMorePplInfo(props.url, props.indice);
    }
    if (props.planetInfo) {
      actions.getMorePtInfo(props.url, props.indice);
    }
  }, []);

  return (
    <div className="card" style={{ width: "22rem" }}>
      <img height={300} width={450} src={props.charaInfo ? store.imgCharacters[props.indice].url : store.imgPlanets[props.indice].url }  className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title mb-5">{props.title}</h5>
        {props.charaInfo && props.properties && (
          <div>
            <p className="card-text">Gender: {props.properties.gender}</p>
            <p className="card-text">
              Hair Color: {props.properties.hair_color}
            </p>
            <p className="card-text">Eye Color: {props.properties.eye_color}</p>
            <p></p>
            <Link
              to={"/people/" + props.uid}
              className="btn btn-outline-primary m-2"
            >
              Learn More
            </Link>
            <button type="button" className="btn btn-outline-warning" onClick={()=>{actions.addFav(props.properties.name)}}>
              {props.isFavorite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              )}
            </button>
          </div>
        )}

        {props.planetInfo && props.properties && (
          <div>
            <p className="card-text">
              Population: {props.properties.population}
            </p>
            <p className="card-text">Terrain: {props.properties.terrain}</p>
            <p></p>
            <Link
              to={"/planets/" + props.uid}
              className="btn btn-outline-primary m-2"
            >
              Learn More
            </Link>
            <button type="button" className="btn btn-outline-warning"  onClick={()=>{actions.addFav(props.properties.name)}}>
              {props.isFavorite ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
