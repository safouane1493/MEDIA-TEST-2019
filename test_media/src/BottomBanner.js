import React, { Component } from 'react';
import './App.css';

class BottomBanner extends Component {
  render() {
    return (
       <div className="banner" style={{background: '#000',color: '#FFF',paddingTop: 15, paddingBottom: 15,position: 'fixed',bottom: 0,width: '100%',textAlign: 'center'}}>
            <h5>REJOIGNER <b>EMIRATES | THE LIST</b></h5>
            <p style={{marginBottom: 0,textTransform : 'uppercase'}} className="borderBtnRed">VOL + HÔtEL NéGOCIéS JUSQU'à -70%</p>
        </div>
    );
  }
}

export default BottomBanner;
