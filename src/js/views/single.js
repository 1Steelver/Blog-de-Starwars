import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log('ACTIONS')

	const pepeNumber = parseInt(params.pepe);

	useEffect( ()=>{
		actions.loadSomeData();
		actions.cargarConParams(5);
	} , [] )

	return (
		<div className="jumbotron">

			{ pepeNumber >= store.demo.length  && pepeNumber < 0
				? (<h1>Planeta no encontrado</h1>) 
				: (<h1 className="display-4">This will show the demo element: {store.demo[pepeNumber].title}</h1>)
			}
			

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
			{ store.planets.map( (item,index)=>(
				<p key={index}>{item.url}</p>
			) ) }

		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};