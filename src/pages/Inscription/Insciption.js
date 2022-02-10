import React, {useState} from "react";
import Axios from "axios";
import background from "../../img/bgimage.png";
import {Col, Container, Row} from "react-bootstrap";
import "./Inscription.css"

const InscriptionForm = () => {
    const [username, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("")
    const [userMail, setUserMail] = useState("")

    const inscription = (e) => {
        e.preventDefault();
        if (userPassword === userPasswordConfirmation) {
            Axios.post("http///localhost:3000/inscriptionReq", {
                username: username,
                userPassword: userPassword,
                userMail: userMail
            }).then((response) => {
                console.log(response)
            })
        } else {
            console.log("erreur : les password ne corresponde pas")
        }

    }
    return (
        <div className="login-container" style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
            <Container>
                <Row>
                    <Col x></Col>
                    <Col className="Main" xs={50} lg={50} xl={50} xxl={50}>

                        <form id="inscription-form" className="inscription-form" onSubmit={inscription}>
                            <label htmlFor="user-input">Pseudo</label>
                            <br/>
                            <input
                                type="text"
                                className="user-input"
                                id="user-input"
                                onChange={(e) => {
                                    setUserName(e.target.value)
                                }}
                            />
                            <br/>
                            <label htmlFor="password-input">Mot de passe</label>
                            <br/>
                            <input
                                type="password"
                                className="password-input"
                                id="password-input"
                                onChange={(e) => {
                                    setUserPassword(e.target.value)
                                }}
                            />
                            <br/>
                            <label htmlFor="password-confirmation-input">Confirmer le mot de passe</label>
                            <br/>
                            <input
                                type="password"
                                className="password-confirmation-input"
                                id="password-confirmation-input"
                                onChange={(e) => {
                                    setUserPasswordConfirmation(e.target.value)
                                }}
                            />
                            <br/>
                            <label htmlFor="email-input">Adresse mail</label>
                            <br/>
                            <input
                                type="email"
                                className="email-input"
                                id="email-input"
                                onChange={(e) => {
                                    setUserMail(e.target.value)
                                }}
                            />
                            <br/>
                            <input type="submit" value="Inscription"/>
                        </form>
                    </Col>
                    <Col className="col-left-side"></Col>
                </Row>
            </Container>

        </div>
    );
};

export default InscriptionForm;