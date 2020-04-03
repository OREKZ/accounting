import React, { Component } from 'react';
import { thisExpression } from '@babel/types';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import userauth from './auth';
import 'tachyons';
import {IonMenuButton,IonCardHeader,IonButton, IonMenu,
     IonItem, IonContent, IonMenuToggle, IonApp, IonSplitPane,
      IonPage, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonList, IonFooter, IonCard } from '@ionic/react';
import{MdAddCircle,MdUpdate,MdSystemUpdateAlt,MdAddShoppingCart,MdHome} from 'react-icons/md';
import Iframe from 'react-iframe'
class home extends Component{
    constructor(){
      super();
}

  render(){
       return(
           <>
            <nav >
        <div >
          <div className="nav-header">
            <IonMenuButton slot="start"></IonMenuButton> 
          </div>
        </div>
      </nav>
               
                
           
        <IonContent> 
        <div className="roomsHero">
            <div className="flex flex-column">
            <div className="banner">
      <h1>contek forex school</h1>
      <div />
      <p>we provide life changing forex <strong>video</strong> courses with the lowest price ever</p>
      <Link to='/premvideos'className="btn-primary"> 
      start now
       </Link>
    </div>

<div className="banner">
      <h3>what you will learn</h3>
      <div />
      <h4>01-forex basics</h4>
      <h4>02-forex acronyms and jargon</h4>
      <h4>03-forex analysis</h4>
      <h4>04-fundamental analysis</h4>
      <h4>05-technical analysis</h4>
      <h4>06-metatrader 4</h4>
      <h4>07-calculating risks the smart way</h4>
      <h4>08-examples using real money</h4>
      <Link to='/premvideos' className="btn-primary"> 
      start learning
       </Link>
</div>
   

    <div className="banner">
      <h1>start today</h1>
      <div />
      <h1>with just NGN3000</h1>
      <iframe src="https://drive.google.com/file/d/1yGQU4wLFm3I9UT1XRRw-0lc1nmJJqyO7/preview" width="300" height="300"></iframe>
      <Link to='/premvideos' className="btn-primary"> 
      start learning
       </Link>
     
    </div>
          </div>
   
            <div className="flex flex-column">
          
            </div>
           

            </div>
            
        </IonContent>
           
           </>
       );
   }
}
export default home;