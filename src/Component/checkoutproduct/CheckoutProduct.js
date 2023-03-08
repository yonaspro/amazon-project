import React from "react";
import "./Checkoutproduct.css";
import { useSateValue } from "../stateProvider/Stateprovider";
import StarRateIcon from '@mui/icons-material/StarRate';
const CheckoutProduct = ({ id, title, image, price, rating,hideButton }) => {
	const [{ basket }, dispatch] = useSateValue();
	const RemovefromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};
	return (
		<div className="CheckoutProduct">
			<img className="  CheckoutProduct__img" src={image} />
			<div className="CheckoutProduct__ifo">
				{id}
				<p className="CheckoutProduct__title">{title}</p>
				<p className="CheckoutProduct__price">
					<small>$</small>
					<strong> {price}</strong>
				</p>
				<div className="CheckoutProduct__rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p> < StarRateIcon className="star"/></p>
						))}
				</div>
				{!hideButton &&(
					<button onClick={RemovefromBasket}>Remove from Basket</button>
					)}{""}
			</div>
		</div>
	);
};

export default CheckoutProduct;
