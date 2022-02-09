import React, {useState} from "react";
import axios from "axios";
import background from "../../img/bgimage.png";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const InscriptionForm = () => {
    const [userNameForm, setUserName] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("")
    const [userMail, setUserMail] = useState("")

    const inscription = () => {/*
        Axios.post("https///localhost:3000/inscription", {
            username: usernameForm,
            userpassword: userpasswordFrom,
        }).then((response) => {
            console.log(response)
        })*/
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
                    <Col/>
                    <Col className="Acceuil" xs={50} lg={50} xl={50} xxl={50}>
                        <label htmlFor="inscription-form">Inscription</label>
                        <form id="inscription-form" className="inscription-form" onSubmit={inscription}>
                            <label htmlFor="user-input">Pseudo</label>
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
                    <Col className="col-left-side"/>
                </Row>
            </Container>


        </div>
    );
};

export default InscriptionForm;