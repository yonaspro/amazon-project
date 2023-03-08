import React from "react";
import "./Product.css";
import { useSateValue } from "../stateProvider/Stateprovider";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const Product = ({ title, price, id, rating, image }) => {
	const [{ basket }, dispatch] = useSateValue();
	// console.log("this ith rhe baske ", basket);
	const addeToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				{/* {id} */}
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong> {price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>< StarOutlinedIcon className="star"/></p>
						))}
				</div>
			</div>
			<img src={image} alt="item-image" />
			<button onClick={addeToBasket}>add to Basket</button>
		</div>
	);
};

export default Product;
