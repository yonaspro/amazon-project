import React, { useState } from "react";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";
const Login = () => {
	const [email, setemail] = useState("");
	const [ password, setpassword ] = useState("");

	const navigate = useNavigate();
	// console.log(target.value);
	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((usercridential) => {
				if (usercridential) navigate('/');
			})
			.catch((error) => alert(error.massage));
	};
	const register = (e) => {
		e.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
			.then((usercredential) => {
				if (usercredential) navigate('/');
			})
			.catch((error) => alert(error.massage));
	};

	return (
		<div className="login">
			<Link to={"/"}>
				<img
					className="login_logo"
					src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
				/>
			</Link>

			<div className="login__container">
				<h1> Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setemail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setpassword(e.target.value)}
					/>
					<button
						type="submit"
						onClick={signIn}
						className="login__signinbutton">
						Sign In
					</button>
				</form>
				<p>
					By signing you agree to the amazon Fake clonne condition sela, please
					see our privacy notice, our cookies notice and so on
				</p>
				<button onClick={register} className="logIn__registerButten">
					Create your amazon Account
				</button>
			</div>
		</div>
	);
};

export default Login;
