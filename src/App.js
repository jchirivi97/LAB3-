import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/login"
import Menu from "./components/menu"
import {BrowserRouter as Router,Route, Link,Switch, Redirect} from 'react-router-dom'

const LoginView = () =>(
    <Login></Login>
);

const MenuView = ()=>(
    <Menu></Menu>
);


class App extends Component {

    constructor(props) {
        super(props); 
    }

    render() {

        return (
            <Router>
                <div className="App">
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo" >Menu</Link></li>
                    </ul>                
                    <div>
                        <Switch>
                            <Route path="/todo" component={MenuView}></Route>
                            <Route extact path="/" component={LoginView}></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
            
        );

    }

    onClickTodo(event){
        
        if(this.state.isLoggedIn == false){
            window.location.href = "/";
            alert("No puede ingresar a todo");
        }
    }

}

export default App;