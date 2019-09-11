import React, { Component } from 'react';
import Title from './Title.js';
import Inscription from './Inscription'
import BottomBanner from './BottomBanner'
import TravelCard from './TravelCard'
import './App.css';
import { Container, Row, Col, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
class App extends Component {
constructor() {
 super();
 this.state = {
   listDestinations: []
 }

}


componentDidMount() {

 
var dataDest = require('../destinations.json');
this.setState({listDestinations : dataDest.destinations})
}

  render() {
  
    return (
      <div className="App container">
       
          <Title />

        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
           <div className="row cardsBlock" >
             {this.state.listDestinations.map( elem => <TravelCard data={elem} />)}
          
          
          
          </div>
          <Inscription />

          <BottomBanner />
        
      </div>
    );
  }
}

export default App;


