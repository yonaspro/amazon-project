import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Myroute from "./Component/Myroute";
import { useSateValue } from "./Component/stateProvider/Stateprovider";
import { auth } from "./Component/firebase";



function App() {
	const [{}, dispatch] = useSateValue();
	useEffect(() => {
		auth.onAuthStateChanged((myUser) => {
			if (myUser) {
				dispatch({
					type: "SET_USER",
					user: myUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<BrowserRouter>
			<div className="App">
				<Myroute />
			</div>
		</BrowserRouter>
	);
};

export default App;
