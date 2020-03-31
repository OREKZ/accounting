//aaccesed with coupon code genereted from firebase database
import React, { Component } from 'react';
import { thisExpression } from '@babel/types';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import userauth from './auth';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,
     IonBadge,IonHeader,IonToolbar,IonMenuButton,IonContent,IonTitle ,IonList,IonItem, IonButton} from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';


class prempdf extends Component{
    constructor(){
      super();
      this.state={
        isLoggedin:false,
        users:''
    }
}

/*componentDidMount=()=>{
    var that=this;
    f.auth().onAuthStateChanged(function(user){
        if(user){
            var userid=f.auth().currentUser;
            var userids=userid.uid
             that.setState({users:userids})
            that.setState({isLoggedin:true});
        }else{
            that.setState({isLoggedin:false});
        }
    });

}*/
   render(){
       return(
        
        <div>
        <IonHeader>
            <IonToolbar>
                <IonMenuButton slot="start"></IonMenuButton>
                <IonTitle>prempdf</IonTitle>
            </IonToolbar>
        </IonHeader>
        
        
        </div>
       
       
       );
   }
}
export default prempdf;