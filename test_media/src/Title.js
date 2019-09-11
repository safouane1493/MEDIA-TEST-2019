import React, { Component } from 'react';
import './App.css';

class Title extends Component {
  render() {
    return (
        <div>
        <h1 style={{color: 'red', textTransform: 'uppercase',fontFamily: 'SevenOneEight-ExtraBold'}}>Découvrez les offres du moment</h1>
        <h2 className="borderBtnTitle" style={{textTransform: 'uppercase'}}>Vol + Hôtel jusqu'à' -70%</h2>
           
        </div>
    );
  }
}

export default Title;
