import React, { useState } from "react";
import "../screen.css/Signup.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBInput,
  MDBRadio,
  MDBCardBody,
  MDBBtn
} from "mdb-react-ui-kit";

function Signup() {
  // HoTen, SDT, GioiTinh, NgaySinh, DiaChi, MatKhau
  const [values, setValues] = useState({
    HoTen: "",
    SDT: "",
    GioiTinh: "Nam",
    NgaySinh: "",
    DiaChi: "",
    MatKhau: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value.trim(),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post("http://localhost:5000/signup", values)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!values.HoTen) {
      errors.HoTen = "Vui lòng nhập họ và tên";
    }

    if (!values.SDT) {
      errors.SDT = "Vui lòng nhập số điện thoại";
    }
    // else if (!/^[0-9]{10}$/.test(values.SDT)) {
    //   errors.SDT = "Số điện thoại không hợp lệ";
    // }

    if (!values.GioiTinh) {
      errors.GioiTinh = "Vui lòng nhập GioiTinh";
    }

    if (!values.NgaySinh) {
      errors.NgaySinh = "Vui lòng nhập NgaySinh";
    }

    if (!values.DiaChi) {
      errors.DiaChi = "Vui lòng nhập DiaChi";
    }

    if (!values.MatKhau) {
      errors.MatKhau = "Vui lòng nhập mật khẩu";
    }

    return errors;
  };

  const hoverStyles = {
    color: 'red',
  };



  return (
    <MDBContainer fluid style={{ margin: "40px 10px", padding: "5px 50px" }}>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol>
          <MDBCard className='my-4'>
            <MDBRow className='g-0'>
              <MDBCol md='6' className='d-none d-md-block' marginTop='5%'>
                <MDBCardImage
                  width='50%'
                  height='50%'
                  src='/signup.png'
                  alt='Welcom to Chigsa Clinic'
                  className='d-flex align-items-center mx-auto'
                  fluid
                />
              </MDBCol>
              <MDBCol md='6'>
                {/* <div className="d-flex justify-content-center align-items-center bg-primary vh-100"> */}
                <div className='bg-white p-3 rounded'>
                  <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                      <label htmlFor='HoTen'>
                        <strong>Họ và tên</strong>
                      </label>
                      <input
                        type='text'
                        placeholder='Họ và tên'
                        name='HoTen'
                        onChange={handleInput}
                        className='form-control rounded-0'
                      />
                      {errors.HoTen && (
                        <span className='text-danger'>{errors.HoTen}</span>
                      )}
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='SDT'>
                        <strong>Số điện thoại</strong>
                      </label>
                      <input
                        type='text'
                        placeholder='Số điện thoại'
                        name='SDT'
                        onChange={handleInput}
                        className='form-control rounded-0'
                      />
                      {errors.SDT && (
                        <span className='text-danger'>{errors.SDT}</span>
                      )}
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='DiaChi'>
                        <strong>Địa chỉ</strong>
                      </label>
                      <input
                        type='text'
                        placeholder='Địa chỉ'
                        name='DiaChi'
                        onChange={handleInput}
                        className='form-control rounded-0'
                      />
                      {errors.DiaChi && (
                        <span className='text-danger'>{errors.DiaChi}</span>
                      )}
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='NgaySinh'>
                        <strong>Ngày sinh</strong>
                      </label>
                      <input
                        type='date'
                        placeholder='Ngày sinh'
                        name='NgaySinh'
                        onChange={handleInput}
                        className='form-control rounded-0'
                      />
                      {errors.NgaySinh && (
                        <span className='text-danger'>{errors.NgaySinh}</span>
                      )}
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='GioiTinh'>
                        <strong>Giới tính</strong>
                      </label>
                      <select
                        className='form-control rounded-0'
                        id='GioiTinh'
                        name='GioiTinh'
                      >
                        <option value='male'>Nam</option>
                        <option value='female'>Nữ</option>
                      </select>
                    </div>
                    <div className='mb-3'>
                      <label htmlFor='MatKhau'>
                        <strong>Mật khẩu</strong>
                      </label>
                      <input
                        type='password'
                        placeholder='Mật khẩu'
                        name='MatKhau'
                        onChange={handleInput}
                        className='form-control rounded-0'
                      />
                      {errors.MatKhau && (
                        <span className='text-danger'>{errors.MatKhau}</span>
                      )}
                      {/* At least 8 characters long
                    Contains at least one digit
                    Contains at least one lowercase letter
                    Contains at least one uppercase letter
                    Can include alphanumeric characters */}
                    </div>
                    <button
                      type='submit'
                      className='btn btn-success w-100 rounded-0'
                    >
                      Đăng ký
                    </button>  
                    <Link
                      to='/login'
                      className='w-100'
                      style={{ textDecoration: 'none', color: 'black', transition: 'color 0.3s ease' }}
                       hoverStyle={hoverStyles}
                    >
                      Có tài khoản? Đăng nhập
                    </Link>
                  </form>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};


export default Signup;
