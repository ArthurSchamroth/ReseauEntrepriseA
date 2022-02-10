import React, { Component } from 'react';

class FichesFormation extends Component{


    render(){
        return(
            <div onClick={() => this.props.actionShow(this.props.id)}>
                <h3>{this.props.nom}</h3>
                <p>Formateur :  {this.props.formateur_id}</p>
                <p>Description :  {this.props.desc}</p>
            </div>
        )
    }
}

export default FichesFormation;