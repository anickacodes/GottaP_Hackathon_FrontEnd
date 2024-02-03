import "../components/NavBar.css"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () => {

    return (
        <Navbar className="border" expand="lg" >
            <Container >

                <Navbar.Brand className="mx-auto" >
                    <span className="font-weight-bold display-2" >GottaP</span></Navbar.Brand>

            </Container>
        </Navbar>
    )
}

export default NavBar