const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: [],//guarda favoritos
			planets:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			addFavorites: (item)=> {//el item es un objeto{}
				let favorites = store.favorites;//
				favorites.push(item)
				setStore({"favorites": item})//agrega a favoritos(ojo superpone datos)
			},
			deleteFavorites: (uid) => {
			let newFavorites = store.favorites.filter((item)=>item.uid !== uid)//muestra una lista de eementos diferentes("!==") al seleccionado
			setStore({"favorites": newFavorites})//guarda en favoritos

			},
			getMoreInfo: (url) => {
				fetch(url).then( resp => resp.json() ).then(data => setStore({"planet": data.result}))

			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
