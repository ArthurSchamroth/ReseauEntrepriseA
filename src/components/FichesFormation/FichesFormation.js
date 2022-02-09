import React, { Component } from 'react';

class FichesFormation extends Component{


    render(){
        return(
            <div>
                <h3>{this.props.nom}</h3><br/>
                <p>Formateur :  {this.props.formateur_id}</p><p> Description :  {this.props.desc}</p>
            </div>
        )
    }
}

export default FichesFormation;