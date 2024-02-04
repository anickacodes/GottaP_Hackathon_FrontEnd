import "../components/NavBar.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/output-onlinegiftools(4).gif"
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";



const NavBar = () => {
    return (

        <Navbar bg="dark" variant="dark"  >
            <Container className="contain">
                <NavbarBrand className="mx-auto" expand="lg" >
                    <img src={logo}
                        alt="Logo"
                        className="img "
                    />
                </NavbarBrand>
            </Container>
        </Navbar>
    )
}

export default NavBar