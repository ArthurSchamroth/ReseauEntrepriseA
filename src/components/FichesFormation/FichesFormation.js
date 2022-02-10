import React, { Component } from 'react';


class FichesFormation extends Component{
    render(){
        return(
            <div>
                <h3>{this.props.nom}</h3><br/>
                <p>Formateur :  {this.props.formateur_id}</p><p> Description :  {this.props.desc}</p>
                <p>
                <iframe width="560" height="315" src={this.props.urlVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </p>
            </div>
        )
    }
}

export default FichesFormation;