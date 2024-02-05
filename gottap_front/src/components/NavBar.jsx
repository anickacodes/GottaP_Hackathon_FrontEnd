import "../components/NavBar.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/output-onlinegiftools(4).gif"
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import {Link} from 'react-router-dom'


const NavBar = () => {
    return (

        <Navbar bg="dark" variant="dark"  >
            <Container className="contain">
                <NavbarBrand className="mx-auto" expand="lg" >
                   <Link to='/'><img src={logo}
                        alt="Logo"
                        className="img "
                    /></Link> 
                </NavbarBrand>
            </Container>
        </Navbar>
    )
}

export default NavBar