import logo from './img/aled_logo_discord.png';
import background from './img/bgimage.png'
import {Row, Container, Col} from 'react-bootstrap'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

import NavBar from "./components/navbar";
import Formation from "./pages/Formations/Formations"
import Login from "./pages/Login/Login"
import InscriptionForm from "./pages/Inscription/Insciption";
import Home from "./pages/home";
import Formateur from "./pages/Formateur/Formateur";


const bgstyles = {
    container: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }
};

function App() {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/Formation' component={Formation}/>
                <Route path="/Formateur" component={Formateur}/>
                <Route path='/Inscription' component={InscriptionForm}/>
                <Route path='/Login' component={Login}/>
                <Redirect to="/"/>
            </Switch>
        </Router>

    );
}

export default App;
