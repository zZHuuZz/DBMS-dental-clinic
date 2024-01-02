import React from "react";
import { Link } from "react-router-dom";

const MainAdmin = () => {
	return (
		<div className='container mt-5'>
			<h1 className='mb-4'>Admin Home Page</h1>
			<p>
				Welcome to the Admin Home Page. Here, you can manage various aspects of
				your application.
			</p>
			<div className='d-flex justify-content-begin mt-4'>
				<Link to='/admin/detail' className='btn btn-primary'>
					Xuất thông tin
				</Link>
				<Link to='/admin/account' className='btn btn-primary'>
					Tài khoản
				</Link>
				<Link to='/admin/dashboard' className='btn btn-primary'>
					Dashboard
				</Link>
				<Link to='/admin/infoappo' className='btn btn-primary'>
					infoappo
				</Link>
				<Link to='/admin/storemed' className='btn btn-primary'>
					storemed
				</Link>
				<Link to='/logout' className='btn btn-primary'>
					Đăng Xuất
				</Link>
			</div>
		</div>
	);
};

export default MainAdmin;
