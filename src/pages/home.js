import React from "react";
import background from "../img/bgimage.png";
import {Container, Row, Col} from "react-bootstrap";
import "./home.css"

const Home = () => {
    return (
        <div className="App" style={{
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
                    <Col className="Accueil" xs={50} lg={50} xl={50} xxl={50}>
                    <br/>
                    <h1 className="Accueil-text">Accueil</h1>
                    <br/>
                    <p className="Accueil-text">Lorem Ipsum. Quae dum ita struuntur, indicatum est apud Tyrum indumentum regale textum occulte,
                        incertum quo locante vel cuius usibus apparatum. ideoque rector provinciae tunc pater
                        Apollinaris eiusdem nominis ut conscius ductus est aliique congregati sunt ex diversis
                        civitatibus multi, qui atrocium criminum ponderibus urgebantur.<br/><br/>

                        Sed cautela nimia in peiores haeserat plagas, ut narrabimus postea, aemulis consarcinantibus
                        insidias graves apud Constantium, cetera medium principem sed siquid auribus eius huius modi
                        quivis infudisset ignotus, acerbum et inplacabilem et in hoc causarum titulo dissimilem sui.<br/><br/>

                        Coactique aliquotiens nostri pedites ad eos persequendos scandere clivos sublimes etiam si
                        lapsantibus plantis fruticeta prensando vel dumos ad vertices venerint summos, inter arta tamen
                        et invia nullas acies explicare permissi nec firmare nisu valido gressus: hoste discursatore
                        rupium abscisa volvente, ruinis ponderum inmanium consternuntur, aut ex necessitate ultima
                        fortiter dimicante, superati periculose per prona discedunt.<br/><br/>

                        Ideo urbs venerabilis post superbas efferatarum gentium cervices oppressas latasque leges
                        fundamenta libertatis et retinacula sempiterna velut frugi parens et prudens et dives Caesaribus
                        tamquam liberis suis regenda patrimonii iura permisit.<br/><br/>

                        Apud has gentes, quarum exordiens initium ab Assyriis ad Nili cataractas porrigitur et confinia
                        Blemmyarum, omnes pari sorte sunt bellatores seminudi coloratis sagulis pube tenus amicti,
                        equorum adiumento pernicium graciliumque camelorum per diversa se raptantes, in tranquillis vel
                        turbidis rebus: nec eorum quisquam aliquando stivam adprehendit vel arborem colit aut arva
                        subigendo quaeritat victum, sed errant semper per spatia longe lateque distenta sine lare sine
                        sedibus fixis aut legibus: nec idem perferunt diutius caelum aut tractus unius soli illis umquam
                        placet.</p><br/>
                        </Col>
                        <Col className="col-left-side"></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;