import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Home from './Home';
import BrainFoods from './BrainFoods';
import FoodBank from './FoodBank';
import Menu from './Menu';
import GroceryList from './GroceryList';
import Footer from './Footer';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return{
        meals: state.meals
    }
}


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
                    <Route exact path='/' component={Home}/>
                    <Route path='/BrainFoods' component={BrainFoods}/>
                    <Route path='/FoodBank' component={FoodBank}/>
                    <Route path='/Menu' component={Menu}/>
                    <Route path='/GroceryList' component={GroceryList}/>
                    <Redirect to='/' />
                </Switch>
                <Footer/>
            </div>
        )
    }
}


export default withRouter(connect(mapStateToProps)(Main));
