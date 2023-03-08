import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./payment.css";
import { useSateValue } from "../stateProvider/Stateprovider";
import CheckoutProduct from "../checkoutproduct/CheckoutProduct";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../firebase";

const Payment = () => {
	const navigete = useNavigate();
	const [error, seterror] = useState(null);
	const [processing, setProcesing] = useState("");
	const [succeeded, setSucceeded] = useState(false);
	const [disabled, setDisabled] = useState(true);
	const [{ basket, user }, dispatch] = useSateValue();
	const [clientSecret, setClientSecretet] = useState(true);
	const stripe = useStripe();
	const elements = useElements();
	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${Math.floor(
					getbasketTotal(basket) * 100
				)}`,
			});
			setClientSecretet(response.data.clientSecrtet);
		};
		getClientSecret();
	}, [basket]);
	console.log("this is", clientSecret);
	console.log(error);

	const getbasketTotal = (basket) =>
		basket?.reduce((amount, item) => item.price + amount, 0);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcesing(true);
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})

			.then(({ paymentIntent }) => {
				console.log(paymentIntent);
				db.collection("users")
					.doc(user?.uid)
					.collection("orders")
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					})
					.catch(error);

				setSucceeded(true);
				seterror(null);
				setProcesing(false);

				dispatch({
					type: "EMPTY_BASKET",
				});
				navigete("/orders");
			});
	};

	const handleChange = (event) => {
		setDisabled(event.empty);
		seterror(event.error ? event.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__header">
				<h1>
					Checkout(
					<Link className=" link" to={"/checkout"}>
						{basket?.length} items
					</Link>
					)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>123 react ave</p>
						<p>washington, Dc</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket?.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__pricecontainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total:{value}</h3>}
									decimalScale={2}
									value={getbasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								{/* <button
								
									disabled={processing || disabled || succeeded}>
									{processing ? (
										<span>processing...</span>
									) : (
										<span>Buy Now</span>
									)}
								</button> */}

								<button
									className=""
									disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>processing</p> : "Buy Now"}</span>
								</button>
								{/* <div>{<div>{error}</div>}</div> */}
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
