const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Mc8bDHLpQDd5dM4Ft9mZXFqMKfeIO6MU1BFhpOdwKBTNwuDP8NnfQMSEI" +
    "lksyYDh6W0pY3XqhS7WnqF1LSa7Mfb004hobgjAT",
);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello yonas"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
