import React, {useState} from "react";
import axios from "axios";

const InscriptionForm = () => {
    const [usernameForm, setUserName] = useState("")
    const [userpasswordFrom, setUserPassword] = useState("")

    const inscription = () => {/*
        Axios.post("https///localhost:3000/register", {
            username: usernameForm,
            userpassword: userpasswordFrom,
        }).then((response) => {
            console.log(response)
        })*/
    }
    return (
        <div className="Login">
            <h1>Inscription</h1>
            <label>Pseudo</label>
            <input
                type="text"
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />
            <label>Mot de passe</label>
            <input
                type="text"
                onChange={(e) => {
                    setUserPassword(e.target.value)
                }}
            />
            <button onClick={inscription}> S'inscrire </button>
        </div>
    ); 
};

export default InscriptionForm;