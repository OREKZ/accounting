import React from 'react';
import {withRouter} from 'react-router-dom';
import { IonMenu, IonItem, IonContent, IonMenuToggle, IonApp, IonSplitPane, IonPage, IonRouterOutlet } from '@ionic/react';


const Menu=({history})=>(
    <IonMenu contentId="main">
     <IonContent>
         <div >
         <IonMenuToggle>  <IonItem onClick={()=>history.push('/')}>home</IonItem></IonMenuToggle>
         <IonMenuToggle> <IonItem onClick={()=>history.push('/premvideos')}>courses</IonItem></IonMenuToggle>
         <IonMenuToggle> <IonItem onclick={()=>history.push('/prempdf')}>pdfs</IonItem></IonMenuToggle>
         <IonMenuToggle> <IonItem onclick={()=>history.push('/tradingview')}>live chart</IonItem></IonMenuToggle>
         </div>
        
             
     </IonContent>
    </IonMenu>
 );

 export default withRouter(Menu);