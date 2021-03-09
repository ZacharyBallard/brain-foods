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
import { addMeal } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return{
        meals: state.meals
    }
}

const mapDispatchToProps = {
    addMeal:(values) => addMeal(values)
}


class Main extends Component {
    
    render(){
        return(
            <div>
                <Header meals={this.props.meals}/>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/BrainFoods' component={BrainFoods}/>
                    <Route path='/FoodBank' render={() => <FoodBank addMeal={this.props.addMeal} meals={this.props.meals}/>}/>
                    <Route path='/Menu' component={Menu}/>
                    <Route path='/GroceryList' component={GroceryList}/>
                    <Redirect to='/' />
                </Switch>
                <Footer/>
            </div>
        )
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
