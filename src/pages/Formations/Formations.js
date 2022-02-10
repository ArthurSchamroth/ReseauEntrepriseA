import React, { useState, useEffect } from "react";
import background from "../../img/bgimage.png";
import {Container, Row, Col} from "react-bootstrap";
import FichesFormation from "../../components/FichesFormation/FichesFormation";
import "./Formations.css"

function Formation() {

    const [listeFormation, setListeFormation] = useState([]);
    const [isInitialRender, setIsInitialRender] = useState(true);
    /*ListeFormation => (id, nom, des, formateur_id) {

    }*/
    var sameCategorie = ""
    const testListe= [{id : "1", nom: "Introduction a React", desc:"Cette formation vous permetteras d'apprendre le ReactJS afin de faire du developpement web.", formateur_id:"Jean Castex", categorie: "Developpement", urlVideo: "https://www.youtube.com/embed/K3D2rjAUQ3o"},
                    {id : "2", nom: "Apprennez a cuisiner comme un chef", desc: "Grace a cette formation, vous allez devenir un chef kebabiste de renom !", formateur_id:"Frederic Molas", categorie:"Cuisine", urlVideo: "https://www.youtube.com/embed/fzWjwo7E5ik"},
                    {id: "3", nom: "Decouvrez la cuisine Namuroise", desc: "Grace a cette formation, vous pourrez apprendre comment des tyros peuvent faire de la bouffe trop trop sale", formateur_id: "Dimitri Doeran", categorie:"Cuisine", urlVideo: "https://www.youtube.com/embed/3AkM7xFIaDE"}]
    
    useEffect(()=>{
        if(isInitialRender){
            setIsInitialRender(false);
            setListeFormation(testListe);
        }
    })
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
                    <Col></Col>
                    <Col className="Main" xs={50} lg={50} xl={50} xxl={50}>
                        <h1 className="Formation-title">Formations</h1>
                        <p className="Formation-text">VOus trouverez ci-dessous la liste des formations disponible triée par catégorie</p>
                        <Container fluid>
                            {listeFormation.map((data, key) => { 
                                if(data.categorie === sameCategorie) {
                                    sameCategorie = data.categorie
                                    return(
                                    <Row key={key}>
                                        <FichesFormation 
                                        nom ={data.nom}
                                        desc = {data.desc}
                                        formateur_id = {data.formateur_id}
                                        categorie= {data.categorie}
                                        urlVideo = {data.urlVideo}
                                        />
                                    </Row>)}
                                else {
                                    sameCategorie = data.categorie
                                    return(
                                    <Row key={key}>
                                        <h2>{data.categorie}</h2>
                                        <FichesFormation 
                                        nom ={data.nom}
                                        desc = {data.desc}
                                        formateur_id = {data.formateur_id}
                                        categorie= {data.categorie}
                                        urlVideo = {data.urlVideo}
                                        />
                                </Row>)
                            }
                            })}
                            {console.log(sameCategorie)}
                        </Container>
                        
                    </Col>
                    <Col className="col-left-side"></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Formation;