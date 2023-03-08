import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useSateValue } from "../stateProvider/Stateprovider";
import { auth } from "../firebase";
const Header = () => {
	
	const[{basket, user}, dispatch] = useSateValue();
    const handleAuthentication = ()=>{
        if(user) auth.signOut();
    };

	

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
				/>
			</Link>

			<div className="header___search">
				<input className="header__searchInput" type={"text"} />
				<SearchIcon className="geader__searchIcon" />
			</div>
			<div className="header__nav">
				<Link to={!user && "/login"} className="header__clearlink">
					<div className="header__option">
						<span className="header__optiomOne">
							Hello {!user ? "Guest" : user?.email}
						</span>
						<span onClick={handleAuthentication} className="header__optionTwo">
							{user ? "sign out" : "sign in"}
						</span>
					</div>
				</Link>
				<Link to= "/orders" className="header__clearlink">
				<div className="header__option">
					<span className="header__optiomOne">Return </span>
					<span className="header__optionTwo">& orders</span>
					</div>
					</Link>
				<div className="header__option">
					<span className="header__optiomOne">Your</span>
					<span className="header__optionTwo">Prime</span>
					</div>
					
				<Link to="/checkout" className="header__clearlink">
					<div className="header__optionBasket">
						<ShoppingBasketIcon />
						<span className="header__optionTwo header__basketCort">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
