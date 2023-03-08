import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Homee/Home";
import Header from "./Header/Header";
import CheckOut from "./checkout/CheckOut";
import Login from "./login/Login";
import Payment from "./payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./orders/Orders";
const promise = loadStripe(
	"pk_test_51Mc8bDHLpQDd5dM4BPNzX0BoZte3DC81YC7TuRd8h9wPXpq6yIRTKLVT0TkrQ9mVHSQUECFN7qyma0Bu88SZhNEg00Sb0zcud1"
);
const Myroute = () => {
	return (
		<>
			<Routes>
				<Route
					path="/payment"
					element={
						<>
							<Header />
							<Elements stripe={promise}>
								<Payment />
							</Elements>
						</>
					}
				/>
			</Routes>

			<Routes>
				<Route
					path="/orders"
					element={
						<>
							<Header />
							<Orders />
						</>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route
					path="/"
					element={
						<>
							<Header />
							<Home />
						</>
					}
				/>

				<Route
					path="/checkout"
					element={
						<>
							<Header />
							<CheckOut />
						</>
					}
				/>
			</Routes>
		</>
	);
};

export default Myroute;
