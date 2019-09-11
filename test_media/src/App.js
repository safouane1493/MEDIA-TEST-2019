import React, { Component } from 'react';
import Title from './Title.js';
import Inscription from './Inscription'
import BottomBanner from './BottomBanner'
import TravelCard from './TravelCard'
import './App.css';
import { Container, Row, Col, Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
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
      <div>
      <div className="App container">
       
          <Title />


          <select style={{marginTop: 25, height : 30}} onChange={(e) => this.setState({value: event.target.value,listDestinations : this.state.listDestinations.filter(item => (item.country === event.target.value)? true : false)})}>
            <option>Sélectionner un pays</option>
            {this.state.listDestinations.map(elem => <option value={elem.country}>{elem.country}</option>)}
          </select>

           <div className="row cardsBlock" >
             {this.state.listDestinations.map( elem => <TravelCard data={elem} />)}
          
          
          
          </div>
          <Inscription />

         
        
      </div>
       <BottomBanner />
       </div>
    );
  }
}

export default App;


