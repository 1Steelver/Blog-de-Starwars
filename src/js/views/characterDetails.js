import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useState, useContext, useEffect } from "react";

export default function CharacterDetails() {
  const params = useParams();
  const { store, actions } = useContext(Context);
  useEffect(() => {
    if (params.ids) {
      actions.verPersona(params.ids);
    }
  }, [params.ids]);
  console.log(store.character);
  const index = params.ids - 1;
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img width={450} height={300} src={store.imgCharacters[index].url} />
        </div>
        <div className="col-6">
          <h1>
            {store.character ? store.character.properties.name : "cargando"}
          </h1>
          <p>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat."
          </p>
        </div>
      </div>
      <div className="row border-top border-danger">
        <div className="col-2">
          Height:{" "}
          {store.character ? store.character.properties.height : "cargando"}
        </div>
        <div className="col-2">
          Mass: {store.character ? store.character.properties.mass : "cargando"}
        </div>
        <div className="col-2">
          Hair color:{" "}
          {store.character ? store.character.properties.hair_color : "cargando"}
        </div>
        <div className="col-2">
          Skin color:{" "}
          {store.character ? store.character.properties.skin_color : "cargando"}
        </div>
        <div className="col-2">
          Eye color:{" "}
          {store.character ? store.character.properties.eye_color : "cargando"}
        </div>
        <div className="col-2">
          Birth year:{" "}
          {store.character ? store.character.properties.birth_year : "cargando"}
        </div>
      </div>
    </div>
  );
}
