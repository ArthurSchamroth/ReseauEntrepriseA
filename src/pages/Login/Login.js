import React from "react";

const Login = () => {
    return (
        <div className="Login">
            <h1>Connection</h1>
            <label>Pseudo</label>
            <input
                type="text"
            />
            <label>Mot de passe</label>
            <input
                type="text"
            />
        </div>
    );
};

export default Login;