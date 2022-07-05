import { element } from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  return (
    
    <nav className="navbar navbar-light navbar-expand-sm bg-light">
           <Link to="/">
        <span className="navbar-brand mb-0 h1">starwars</span>
      </Link>
      <div className="row w-100" >
        <div className="col-10"></div>
        <div className="dropdown col-2 ">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
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
      </div>
    </nav>
  );
};
