import { element } from "prop-types";
import { Link } from "react-router-dom";
import React,{ useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">starwars</span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Favorites
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favoritos.map((element, index) => {
              return (
                <li key={index}>
                  {element}{" "}
                  <button
                    onClick={() => {
                      actions.deleteFav(element);
                    }}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};