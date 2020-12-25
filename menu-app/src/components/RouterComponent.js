import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Login from "./Login"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import App from '../App'
import WelcomePage from "./WelcomePage"

function RouterComponent(props) {
    return (
        <BrowserRouter>
            <Navbar/>   
            <Switch>
            <Route exact path="/" component={WelcomePage}/>
              <Route exact path="/menu" component={App}/>
              <Route  path="/about" component={About} />
              <Route  path="/contact" component={Contact}/>
              <Route  path="/login" component={Login}/>
            </Switch>
      </BrowserRouter>
    );
}

export default RouterComponent;