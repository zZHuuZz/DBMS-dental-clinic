import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
	return (
		<div className='container mt-5'>
			<h1 className='mb-4'>Admin Dashboard</h1>
			<p>
				Welcome to the Admin Dashboard. Here, you can manage various aspects of
				your application.
			</p>
			<div className='d-grid gap-2 col-6 mx-auto mt-4'>
				<Link to='/logout' className='btn btn-primary'>
					Đăng Xuất
				</Link>
			</div>
		</div>
	);
}