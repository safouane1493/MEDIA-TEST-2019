import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Inscription extends Component {
  render() {
    return (
        <div>
        <h6 style={{textTransform: 'uppercase'}}>Comment bénéficier de l'offre</h6>
        <p className="borderBtnBlack" style={{marginBottom: 50,fontWeight: 'bold',textTransform: 'uppercase'}}>150 Euro de réduction* dès 1000Euro d'achat</p>
            

        <div style={{background: 'red',color: '#FFF',paddingTop: 15,paddingBottom: 15,borderRadius : 5}}>
            <h5 style={{fontFamily: 'SevenOneEight-ExtraBold'}}>déja membre?</h5>
            <p style={{marginBottom: 0}}>votre code promo vous attend directement sur le site <a href="#" style={{fontWeight: 'bold',color: '#FFF',textDecoration: 'underline'}}>en cliquant ici</a></p>
        </div>
         <div class="row">
        <div className="col-md-4">
             <div className="Numberlist" style={{float: 'left',width: '30%',height: '100%'}}>
                <p style={{fontSize: 100,fontWeight: 'bolder',margin: 'auto',color: 'red'}}>1</p>
            </div> 
             <div className="NumberlistText" style={{marginTop: 'auto',marginBottom: 'auto',float: 'left',height: '100%'}}>
            <p style={{ marginTop: 47,textAlign: 'left',textTransform: 'uppercase',fontSize: 15}}>Rejoignez<br />
            <span style={{color: 'red',fontWeight: 'bold'}}>Emirates | THe list</span></p>
            </div>
            
        </div>
         <div className="col-md-4">
              <div className="Numberlist" style={{float: 'left',width: '20%',height: '100%'}}>
                <p style={{fontSize: 100,fontWeight: 'bolder',margin: 'auto',color: 'red'}}>2</p>
            </div> 
             <div className="NumberlistText" style={{marginTop: 'auto',marginBottom: 'auto',float: 'left',height: '100%'}}>
            <p style={{ marginTop: 39,textAlign: 'left',textTransform: 'uppercase',fontSize: 15}}>Recevez par email<br />
            <span style={{color: 'red',fontWeight: 'bold'}}>Votre Bon de 150 Euro offert</span><br />
            à utiliser dès 1000 Euro D'achat</p>
            </div>
        </div>
         <div className="col-md-4">
              <div className="Numberlist" style={{float: 'left',width: '30%',height: '100%'}}>
                <p style={{fontSize: 100,fontWeight: 'bolder',margin: 'auto',color: 'red'}}>3</p>
            </div> 
             <div className="NumberlistText" style={{marginTop: 'auto',marginBottom: 'auto',float: 'left',height: '100%'}}>
           <p style={{ marginTop: 47,textAlign: 'left',fontSize: 15}}>Réservez votre séjour<br />
            <span style={{color: 'red',fontWeight: 'bold'}}>Avant le 30 avril 2019</span></p>
            </div>
        </div></div>

        <a href="#" className="inscriptionBtn" style={{background: 'red', color: '#FFF', paddingTop : 5, paddingBottom: 5 , paddingLeft : 45, paddingRight: 45, cursor: 'pointer'}}>JE M'INSCRIS</a>

        </div>
    );
  }
}

export default Inscription;
