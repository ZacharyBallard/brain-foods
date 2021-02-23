import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';



class Main extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <Header/>
                <NavBar/>
                <Switch>
                    <Route path='/' component={Home}/>
                </Switch>
            </div>
        )
    }
}


export default Main;
