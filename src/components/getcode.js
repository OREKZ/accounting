import React, { Component } from 'react';
import 'tachyons';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import PaystackButton from 'react-paystack';
import {f,database,storage,auth} from './config.js';
import Userauth from './auth.js';
import {IonMenuButton,IonCardHeader,IonButton, IonMenu,
    IonCard,IonCardContent,IonText,
    IonItem, IonContent, IonMenuToggle, IonApp, InponSplitPane,
     IonPage, IonRouterOutlet, IonHeader, IonToolbar, IonTitle, IonList } from '@ionic/react';
import{MdAddCircle,MdUpdate,MdSystemUpdateAlt,MdAddShoppingCart,MdHome} from 'react-icons/md';

class getcode extends Component{
    constructor(){
        super();
        this.state={
            firebasecode:'',
           isLoggedin:false,
           users:'',
           key: "pk_live_b2f714a38458480370b4dad36ff33ce952699b7c", //PAYSTACK PUBLIC KEY
    		email: "ositaositas@yahoo.com",  // customer email
            amount: 300000 ,//equals NGN100,
            codeavailable:false
        }
  }

  componentDidMount=()=>{
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

}

callback = (response) => {
    console.log(response); // card charged successfully, get reference here
    this.getcodefromfirebase();
}

close = () => {
    console.log("Payment closed");
}

getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for( let i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

  getcodefromfirebase=()=>{
    var that=this;
    //get code fro firebase compare with the given code the set is paid to true
    database.ref('cuponcode').child("code").once('value').then(function(snapshot){
      const exists=(snapshot.val() !== null) 
    if(exists) var data=snapshot.val();
    that.setState({firebasecode:data})
    console.log(data);
    that.setState({codeavailable:true})
  }
    )
  }
  
  render(){
      return(
          <>
            <IonHeader>
            <IonToolbar>
                <IonMenuButton slot="start"></IonMenuButton>
                <IonCardHeader>
                <IonButton  >
          <MdHome/>
          </IonButton>
                </IonCardHeader>
            </IonToolbar>
        </IonHeader>
        {this.state.isLoggedin?(
             <div className="code">
             <div className="flex flex-column">
             <IonCard>
                 <IonCardContent>
                     <IonItem>
                     <IonText>pay NGN 3000 to get your login code</IonText>
                     </IonItem>
                 </IonCardContent>
             </IonCard>
             <div>
               <p>
                 <PaystackButton
                   text="Make Payment"
                   className="payButton"
                   callback={this.callback}
                   close={this.close}
                   disabled={true} 
                   embed={true} 
                   reference={this.getReference()}
                   email={this.state.email}
                   amount={this.state.amount}
                   paystackkey={this.state.key}
                   tag="button"
                 />
               </p>
             </div>
             {this.state.codeavailable?<h2 className="btn-primary">your code is {this.state.firebasecode}</h2>:
             <h3 className="btn-primary">if payment is sucessful we will display your login code here</h3>}
       <Link to='/premvideos'> <IonButton>clik to start learning</IonButton> </Link> 
         {/*<IonButton onClick={this.getcodefromfirebase}>please remove</IonButton>*/}    
             </div>
             </div>
        ):(<Userauth message={"please login to start learnig"}/> )}
          </>
      );
  }
  
}

export default getcode;
