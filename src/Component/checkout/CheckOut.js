import React from "react";
import CheckoutProduct from "../checkoutproduct/CheckoutProduct";
import SubTotal from "../subtotal/SubTotal";
import { useSateValue } from "../stateProvider/Stateprovider";
import "./checkout.css";
const CheckOut = () => {
	const [{ basket }, dispatch] = useSateValue();
	return (
		<div className="checkOut">
			<div className="checkOut__left">
				<img
					className="checkOut__ad"
					src="https://m.media-amazon.com/images/I/71cFf9tcFML._SX3000_.jpg"
					alt=""
				/>
				<h3>Hello,</h3>
				<h2 className="checkOut__title">Your Shopping Basket</h2>
				{basket.map((item) => (
					<CheckoutProduct
						id={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						rating={item.rating}
					/>
				))}
			</div>
			<div className="checkOut__right">
				<SubTotal />
			</div>
		</div>
	);
};

export default CheckOut;
