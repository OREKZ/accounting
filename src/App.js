import React, { Component } from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import home from './components/home';
import starter from './components/starter';
import premvideos from './components/premvideos';
import tradingview from './components/tradingview';
import getcode from './components/getcode';
import videoplayer from './components/videoplayer';
import { IonMenu, IonItem, IonContent, IonMenuToggle, IonApp, IonSplitPane, IonPage, IonRouterOutlet } from '@ionic/react';
import Menu from './components/Menu';
import "./App.css";
class App extends Component{
    constructor(){
      super();
}
   render(){
       return(
           <BrowserRouter>
            <IonApp>
                  
                    <Menu/>
                    <IonPage id="main">
                        <IonRouterOutlet>
                        <Route exact path="/" component={home}/>
                        <Route path="/starter" component={starter}/>
                        <Route path="/premvideos" component={premvideos}/>
                        <Route path="/tradingview" component={tradingview}/> 
                        <Route path="/getcode" component={getcode}/> 
                        <Route exact path="/videoplayer/:slug/" component={videoplayer}/>
                        </IonRouterOutlet>
                       </IonPage>
                 
               </IonApp> 
           </BrowserRouter>
              
       );
   }
}

export default App;
