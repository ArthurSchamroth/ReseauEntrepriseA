import {Container} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/aled_logo_discord.png";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="#1b1e1c" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/home">
                        <img src={logo} height="140" width="150" className="d-inline-block align-top"
                             alt={"logo_A_led"}/>
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/Formation">Formations</Link>
                    <Link to="/Fromateur">Formateur</Link>
                    <Link to="/Login">Login</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default NavBar;