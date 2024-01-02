import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "../components.css/footer.css";
export default function App() {
  return (
    <MDBFooter
      className='text-center text-lg-start'
      style={{ background: "#64ccc5", color: "#04364a" }}
    >
      <MDBRow className='mt-3'>
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon='gem' className='me-3' />
                  Chigsa
                </h6>
                <p fontWeight='bolder'>
                  Chigsa, đội ngũ chuyên gia nha khoa tận tâm với trang thiết bị
                  hiện đại, cam kết mang lại trải nghiệm chăm sóc nha khoa chất
                  lượng cao. Chúng tôi không chỉ điều trị vấn đề nha khoa mà còn
                  tạo nên nụ cười khỏe mạnh và tự tin. Hãy đồng hành cùng chúng
                  tôi trên hành trình duy trì và nâng cao sức khỏe răng của bạn!
                </p>
              </MDBCol>

              <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Nổi bật</h6>
                <p>
                  <Link
                    to='/service'
                    className='link'
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Niềng răng thẩm mỹ
                  </Link>
                </p>
                <p>
                  <Link
                    to='/service'
                    className='link'
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Cấy ghép Implant
                  </Link>
                </p>
                <p>
                  <Link
                    to='/service'
                    className='link'
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Bọc răng sứ
                  </Link>
                </p>
                <p>
                  <Link
                    to='/service'
                    className='link'
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Mặt dán sứ Veneer
                  </Link>
                </p>
                <p>
                  <Link
                    to='/service'
                    className='link'
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Điều trị tuỷ
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Giờ mở cửa</h6>
                <div className='mb-2'>
                  <FaAngleRight />
                  Thứ hai <span> 9.00 - 19.00 </span>
                </div>
                <div className='mb-2'>
                  <FaAngleRight />
                  Thứ ba <span> 9.00 - 19.00 </span>
                </div>
                <div className='mb-2'>
                  <FaAngleRight />
                  Thứ tư <span> 9.00 - 19.00 </span>
                </div>
                <div className='mb-2'>
                  <FaAngleRight />
                  Thứ năm <span> 9.00 - 19.00 </span>
                </div>
                <div className='mb-2'>
                  <FaAngleRight />
                  Thứ sáu <span> 9.00 - 19.00 </span>
                </div>
              </MDBCol>

              <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Liên hệ</h6>
                <p>
                  <Link
                    className='link'
                    to='/about'
                    style={{ paddingLeft: "0px" }}
                  >
                    <i class='fas fa-info' /> About us
                  </Link>
                </p>
                <p>
                  <i class='fas fa-location-dot' /> Nguyễn Văn Cừ, quận 5, Thành
                  phố Hồ Chí Minh
                </p>
                <p>
                  <i class='fas fa-envelope' /> info@nhakhoachigsa.com
                </p>
                <p>
                  <FaPhoneAlt /> 1900 8686
                </p>
                <div className='d-flex p-2 mb-4 cus-icon'>
                  <Link to='#' className='link'>
                    <FaFacebook />
                  </Link>
                  <Link to='#' className='link'>
                    <FaInstagram />
                  </Link>
                  <Link to='#' className='link'>
                    <FaTwitter />
                  </Link>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBRow>
      <div
        className='text-center p-4 text-light'
        style={{ backgroundColor: "#04364a" }}
      >
        © 2023 Copyright{" "}
        <a className='text-reset fw-bold' href='#'>
          Chigsa.com
        </a>
      </div>
    </MDBFooter>
  );
}
