import React, { useState } from "react";
import background from "../../img/bgimage.png";
import {Container, Row, Col} from "react-bootstrap";
import FichesFormation from "../../components/FichesFormation/FichesFormation";
import "./Formations.css"
import { Component } from "react";



class Formation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listeFormation : [],
            showListFormation: [],
            isInitialRender: true,
            showInfoFormation: false,
            sameCategorie: "",
            testList: [{id : "2", nom: "Apprennez a cuisiner comme un chef", desc: "Grace a cette formation, vous allez devenir un chef kebabiste de renom !", formateur_id:"Frederic Molas", categorie:"Cuisine"},
            {id: "3", nom: "Decouvrez la cuisine Namuroise", desc: "Grace a cette formation, vous pourrez apprendre comment des tyros peuvent faire de la bouffe trop trop sale", formateur_id: "Dimitri Doeran", categorie:"Cuisine"},
            {id: "7", nom: "Comment gagner Question pour un champion", desc: "Grace a cette strat et le gdoc, vous allez gagner a tout les coups QPUC en battant Martine", formateur_id: "Rayen aka Etoiles", categorie:"Culture"},
            {id : "1", nom: "Introduction a React", desc:"Cette formation vous permetteras d'apprendre le ReactJS afin de faire du developpement web.", formateur_id:"Micode", categorie: "Developpement"},
            {id: "8", nom: "Devenez riche", desc: "Je vous apprend a vendre une image stock a 5eth", formateur_id: "Hasheur", categorie:"Economie"},
            {id: "6", nom: "Apprendre a dire \" Fuck Trayton\" ", desc: "Grace a cette formation, vous allez devenir un ultra Karminecorp", formateur_id: "Karnage", categorie:"Esport"},
            {id: "5", nom: "Decouvrer comment faire un labo ncucleaire", desc: "Cette formation va vous apprendre comment devenir un apprenti chimiste nucleaire dans votre garage, certifié sans danger", formateur_id: "Dirtybiology", categorie:"Science"},
            {id: "4", nom: "Decouvrez la cuisine Namuroise", desc: "Grace a cette formation, vous pourrez apprendre comment des tyros peuvent faire de la bouffe trop trop sale", formateur_id: "Romain ", categorie:"Technologie"}]
        }}



    showFormation = async (id) => { 
            console.log(id)
    }

    mountFichesFormations = () => {
        var list = []
        console.log(this.state.listeFormation)
        var sameCategorie = ""
        this.state.listeFormation.map((data, key) => {
            if(data.categorie === sameCategorie){
                list.push(<Row key={key} className="fiches-custom">
                <FichesFormation 
                id = {data.id} 
                nom ={data.nom}
                desc = {data.desc}
                formateur_id = {data.formateur_id}
                categorie= {data.categorie}
                actionShow={this.showFormation}
                />
                <br/>
            </Row>)
            }
            else{
                sameCategorie = data.categorie
                list.push(<Row key={key} className="fiches-custom">
                <h2 className="Categorie-title">{data.categorie}</h2>
                <hr className="hr-categorie"/>
                <FichesFormation
                id = {data.id} 
                nom ={data.nom}
                desc = {data.desc}
                formateur_id = {data.formateur_id}
                categorie= {data.categorie}
                actionShow={this.showFormation}
                />
                <br/>
            </Row>)
            }
        })
        console.log(list)
        this.setState({showListFormation: list})
    }
    componentDidMount() {
        if(this.state.isInitialRender){
            this.setState({listeFormation: this.state.testList, isInitialRender: false}, function() {
                this.mountFichesFormations()
            })
            
        }
        
    }


    render(){
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
                        <hr className="hr-custom"/>
                        <p className="Formation-text">Vous trouverez ci-dessous la liste des formations disponible triée par catégorie</p>
                        <br/><br/>
                        <Container fluid>
                            {this.state.showListFormation.map((data, key)=>{
                                return(
                                    data
                                )
                            })}
                            {console.log(this.state.showListFormation)}
                        </Container>
                        
                    </Col>
                    <Col className="col-left-side"></Col>
                </Row>
            </Container>
        </div>
    );
};}

export default Formation;