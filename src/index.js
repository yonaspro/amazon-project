import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reducer, { initialState } from "./Component/Reducer"
import { Stateprovider } from "./Component/stateProvider/Stateprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Stateprovider initialState={initialState} reducer={reducer}>
			<App />
		</Stateprovider>
	</React.StrictMode>
);




// const functions = require("firebase-functions");

// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(
// 	"sk_test_51Mc8bDHLpQDd5dM4Ft9mZXFqMKfeIO6MU1BFhpOdwKBTNwuDP8NnfQMSEIlksyYDh6W0pY3XqhS7WnqF1LSa7Mfb004hobgjAT"
// );

// const app = express();
// app.use(cors({ origin: true }));
// app.use(express.json());

// app.get("/", (request, response) => response.status(200).send("hello yonas"));
// app.post("/payments/create", async (request, response) => {
// 	const total = request.query.total;
// 	console.log("paymont", total);
// 	const paymentIntent = await stripe.paymentIntents.create({
// 		amount: total,
// 		currency: "usd",
// 	});
// 	response.status(201).send({
// 		clientSecrtet: paymentIntent.client_secret,
// 	});
// });

// exports.api = functions.https.onRequest(app);
