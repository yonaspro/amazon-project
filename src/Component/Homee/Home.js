import React from "react";
import Product from "../product/Product";
import "./Home.css";
const Home = () => {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__img"
					src="https://m.media-amazon.com/images/I/61P4Ur-OM9L._SX3000_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id={1234}
					title={"Sceptre 24 Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal "}
					price={516.99}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/71P0M7tKjYL._AC_UL160_SR160,160_.jpg"
					}
				/>
				<Product
					id={2345}
					title={
						"Amazon Basics Coffee Pod Storage Drawer for K-Cup Pods, 36 Pod Capacity, Black,"
					}
					price={29.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/71S-pQNQyIL._AC_UL160_SR160,160_.jpg"
				/>
				<Product
					id={3467}
					title={
						"Steamer for Clothes Travel and Home - Portable, Handheld Steamer for Garment and Fabric - No Spitting, Safe and Little"
					}
					price={39.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/71HoaRBhEqL._AC_UL160_SR160,160_.jpg"
				/>
			</div>
			<div className="home__row">
				{/* <Product
					id={4567}
					title="Nike Dri-FIT Legacy91 Tech Hat - Unisex, One Size Fits Most, Adjustable"
					price={35.99}
					rating={5}
					image="https://images-na.ssl-images-amazon.com/images/I/81UrPq997VL._AC_UL450_SR450,320_.jpg"
				/> */}
				<Product
					id={5678}
					title={"Packard Bell AirFrame 27 Inch Ultra Slim Bezel Desktop Monitor, FHD IPS LED 1920 x 1080p, 75 Hertz, 5 Milliseconds, VESA Mounting, Tilt Adjustment, HDMI and VGA for Home and Office Use, 2 Pack"}
					price={45.09}
					rating={4}
					image="https://m.media-amazon.com/images/I/71ik+q18UsL._AC_UY654_FMwebp_QL65_.jpg"
				/>
				{/* <Product
					id={6789}
					title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone"
					price={99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/51QxA-98Q+L._AC_UL450_SR450,320_.jpg"
				/> */}
			</div>
			<div className="home__row">
				<Product
					id={7890}
					title="Allewie Queen Size Platform Bed Frame with Fabric Upholstered Headboard and Wooden Slats Support, Fully Upholstered Mattress"
					price={299.99}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/61lCLrCtuhL._AC_UL160_SR160,160_.jpg"
					}
				/>
				<Product
					id={8901}
					title="Apple 2023 MacBook Pro Laptop M2 Pro chip with 10‑core CPU and 16‑core GPU: 14.2-inch Liquid Retina XDR Display, 16GB Unified"
					price={99.99}
					rating={4}
					image="https://m.media-amazon.com/images/I/61lYIKPieDL._AC_SX425_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id={9012}
					title="VANMASS [2023 Upgraded] Car Dashboard Phone Holder Mount [Super Suction Cup] Compatible for iPhone 13 Pro Max 12 11 X Xr 8 7"
					price={299.88}
					rating={5}
					image={
						"https://m.media-amazon.com/images/I/81nLBeLDKoL._AC_SX679_.jpg"
					}
				/>
				<Product
					 id={9876}
					title="Men's Rogaine Extra Strength 5% Minoxidil Topical Solution for Hair Loss and Hair Regrowth, "
					price={99.99}
					rating={4}
					image=" https://images-na.ssl-images-amazon.com/images/I/81iRD6zzUVL._AC_UL160_SR160,160_.jpg"
				/>
				<Product
					id={6789}
					title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone"
					price={99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/81DM+ZzL8rL._AC_UL450_SR450,320_.jpg"
				/>
			</div>
		</div>
	);
};

export default Home;
