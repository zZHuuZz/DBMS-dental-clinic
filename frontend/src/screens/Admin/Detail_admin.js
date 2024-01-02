import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      className='vh-100'
      style={{ backgroundColor: "#E1F2FB", padding: "0%", color: "#04364a" }}
    >
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col col-lg-6 mb-4 mb-lg-0'>
            <div className='card mb-3' style={{ borderRadius: ".5rem" }}>
              <div className='row g-0'>
                <div
                  className='col-md-4 gradient-custom text-center text-white'
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                    backgroundColor: "whitesmoke",
                  }}
                >
                  <img
                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp' /*đẩy ảnh từ đâu lên z? ai làm thì làm dùm nha*/
                    alt='Avatar'
                    className='img-fluid my-5'
                    style={{ width: "80px" }}
                  />
                  <h5 style={{ color: "#04364a" }}>patient.HoTen</h5>
                  <p>
                    <Link
                      className='far fa-edit mb-5'
                      style={{ color: "#04364a" }}
                    >
                      chỉnh sửa
                      {/* chỉnh padding dùm*/}
                    </Link>
                  </p>
                  <p>
                    <Link style={{ color: "#04364a" }}>Đổi mật khẩu</Link>
                  </p>
                </div>
                <div
                  className='col-md-8'
                  style={{ backgroundColor: "#64ccc5" }}
                >
                  <div className='card-body p-4'>
                    <h6 className='text-uppercase'>Thông tin</h6>
                    <hr className='mt-0 mb-4' />
                    <div className='col pt-1'>
                      <div className='col-6 mb-3'>
                        <h6>Mã bệnh nhân</h6>
                        <p className='text-muted'>patient.MaNhanVien</p>
                      </div>
                    </div>
                    <div className='row pt-1'>
                      <div className='col-6 mb-3'>
                        <h6>Email</h6>
                        <p className='text-muted'>patient.Email</p>
                      </div>
                      <div className='col-6 mb-3'>
                        <h6>Số điện thoại</h6>
                        <p className='text-muted'>patient.SDT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
