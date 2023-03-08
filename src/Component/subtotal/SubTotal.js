import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useSateValue } from "../stateProvider/Stateprovider";
import { Link,  } from "react-router-dom";
const SubTotal = () => {
	const [{ basket }, dispatch] = useSateValue();
	const getBasketTotal = (basket)=>
    basket?.reduce((amount, item)=>item.price + amount, 0);

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="subTotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<Link to="/payment">
			<button className="button">Proceed to Checkout</button>
			</Link>
		</div>
	);
};

export default SubTotal;
