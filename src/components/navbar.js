import {Container} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/aled_logo_discord.png";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import "./navbar.css"


const NavBar = () => {
    return (
        <Navbar className="navbar-custom" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/home">
                        <img src={logo} height="140" width="150" className="d-inline-block align-top"
                             alt={"logo_A_led"}/>
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Link to="/Formation" className="navbar-link-custom">Formations</Link>
                    <Link to="/Inscription="  className="navbar-link-custom">Inscription</Link>
                    <Link to="/Login"  className="navbar-link-custom">Login</Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default NavBar;