import {Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css'

const NavBar = () =>{
    return( 
      <Navbar bg="dark" data-bs-theme="dark">
    <Container>
        <Navbar.Brand className="CustomNavbar" > <img className="CustomImg2" width="50px"  src="src\assets\logo2.png" alt="" /> Valorant Agents</Navbar.Brand>
        <Nav className="me-auto CustomSpace" >
        <Link className="CustomLink" to="/">Home</Link>
        <Link className="CustomLink" to="/favoritos">Favoritos</Link>
        </Nav>
      </Container>
      </Navbar>
    ); 
};

export default NavBar;