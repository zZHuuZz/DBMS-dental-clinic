import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"; //
import Image from "react-bootstrap/Image";
import "../components.css/header.css";
function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className='bg-body-tertiary'
      id='navbar'
    >
      <Container id='conta'>
        <Nav.Link as={Link} to='/' id='link_img'>
          <Image src='icon_main.png' alt='Main logo' width='20%' height='20%' />
        </Nav.Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/about' id='main_sel'>
            Giới thiệu
          </Nav.Link>
          <Nav.Link as={Link} to='/service' id='main_sel'>
            Dịch vụ
          </Nav.Link>
          <Nav.Link as={Link} to='/login' id='main_sel'>
            Đặt lịch hẹn
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to='/login' className='login-button' style={{borderRadius:'15px'}}>
            Đăng nhập
          </Nav.Link>
          <Nav.Link as={Link} to='/signup' className='signup-button'style={{borderRadius:'15px'}} >
            Đăng ký
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
