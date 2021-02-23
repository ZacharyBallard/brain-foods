import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <NavBar/>
            </div>
        );
    }
}

export default App;
