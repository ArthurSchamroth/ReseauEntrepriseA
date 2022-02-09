import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import background from "../../img/bgimage.png";

const Formation = () => {
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
                        <h1>Page Formation</h1>
                    </Col>
                    <Col className="col-left-side"/>
                </Row>
            </Container>
        </div>

    );
};

export default Formation;