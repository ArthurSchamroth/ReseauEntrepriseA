import React, {useState} from "react";
import {Link} from "react-router-dom";

const Login = () => {
    const [username, setUserName] = useState("")
    const [userpassword, setUserPassword] = useState("")
    const login = () => {/*
        Axios.post("https///localhost:3000/inscription", {
            username: username,
            userpassword: userpassword,
        }).then((response) => {
        if(response.data.message){
            setLoginStatus(response.data.message)
            }
        else{
            setLoginStatus(response.data.[0].username)
        }
        })*/
    }
    return (
        <div className="Login">
            <h1>Connexion</h1>
            <label>Pseudo</label>
            <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                    setUserName(e.target.value)
                }}
            />
            <label>Mot de passe</label>
            <input
                type="text"
                placeholder="Password"
                onChange={(e) => {
                    setUserPassword(e.target.value)
                }}
            />
            <button onClick={login}>Connexion</button>
            <button>
                <Link to="/Inscription">
                    Pas encore inscrit ?
                </Link>
            </button>
        </div>
    );
};

export default Login;