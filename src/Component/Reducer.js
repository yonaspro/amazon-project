export const initialState = {
	basket: [],
	user: null,
};
const Reducer = (state, action) => {
	// console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "REMOVE_FROM_BASKET":
			const index = state.basket.findIndex(
				(basketitem) => basketitem.id === action.id
			);
			let newBasket = [...state.basket];
			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(`removed product (id:${action.id})`);
			}
			return {
				...state,
				basket: newBasket,
			};
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "EMPTY_BASKET":
			return {
				...state,
				basket: [],
			};

		default:
			return state;
	}
};
export default Reducer;
