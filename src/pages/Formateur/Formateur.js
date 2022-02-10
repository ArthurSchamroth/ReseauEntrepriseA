import React from "react";
import background from "../../img/bgimage.png";
import {Col, Container, Row} from "react-bootstrap";
import "./Formateur.css"

const Formateur = () => {
    return (
        <div
            style={{
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
                        <h1>page Formateur</h1>
                    </Col>
                    <Col className="col-left-side"></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Formateur;