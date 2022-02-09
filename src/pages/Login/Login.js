import React, {useState} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
import background from "../../img/bgimage.png";
import {Col, Container, Row} from "react-bootstrap";

const Login = () => {
    const [username, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState("")
    const login = () => {
        Axios.post("https///localhost:3000/inscription", {
            username: username,
            userPassword: userPassword,
        }).then((response) => {
            if (response.data.message) {
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].username)
            }
        })
    }
    return (
        <div className="Login" style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
            <Container>
                <Row>
                    <Col/>
                    <Col className="Acceuil" xs={50} lg={50} xl={50} xxl={50}>
                        <form className="login-form" id="login-form" onSubmit={login}>

                            <input
                                type="text"
                                className="username-input"
                                id="user-input"
                                placeholder="Username"
                                onChange={(e) => {
                                    setUserName(e.target.value)
                                }}
                            />
                            <br/>

                            <input
                                type="text"
                                className="password-input"
                                id="password-input"
                                placeholder="Password"
                                onChange={(e) => {
                                    setUserPassword(e.target.value)
                                }}
                            />
                            <br/>
                            <input type="submit" className="login-input" value="Connexion"/>
                        </form>

                        <button className="inscription-button">
                            <Link to="/Inscription" className="inscription-link">
                                Pas encore inscrit ?
                            </Link>
                        </button>

                    </Col>
                    <Col className="col-left-side"/>
                </Row>
            </Container>
        </div>
    );
};

export default Login;