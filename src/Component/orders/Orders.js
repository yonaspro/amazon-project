import React, { useEffect, useState } from "react";
import Order from "../Order/Order";
import "./Orders.css";
import { useSateValue } from "../stateProvider/Stateprovider";
import { db } from "../firebase";

const Orders = () => {
	const [{ basket, user }, dispatch] = useSateValue();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) =>
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<div className="orders">
			<h3>Your Orders</h3>
			<div className="orders__order">
				{orders?.map((order) => (
					<Order order={order} />
				))}
			</div>
		</div>
	);
};

export default Orders;
