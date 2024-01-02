import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/banner";
import "../screen.css/Main.css";
import axios from "axios";

const Main = () => {
	const [name, setName] = useState("");
	// const navigate = userNavigate();
	useEffect(() => {
		axios
			.get("http://localhost:5000")
			.then((res) => {
				// console.log(res)
				if (res.data.valid) {
					setName(res.data.SDT);
				}
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<main className='container-img' id='main'>
			<div className='buttons-container'>
				<Link to='/login' className='btn btn-primary'>
					Đăng Nhập
				</Link>
				<Link to='/signup' className='btn btn-secondary'>
					Đăng Ký
				</Link>
			</div>

			<div className='welcome-section'>
				<h2>Welcome {name} to Chigsa!</h2>
				<p>Explore our services and enjoy a seamless experience.</p>
			</div>

			<Banner />
		</main>
	);
};

export default Main;
