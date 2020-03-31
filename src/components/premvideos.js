//aaccesed with coupon code genereted from firebase database
import React, { Component } from 'react';
import {f,database,storage,auth} from './config.js';
import { thisExpression } from '@babel/types';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import userauth from './auth';
import {IonCard,IonCardContent,IonText, 
    IonMenu, IonItem, IonContent, IonMenuToggle, IonApp,
     IonSplitPane, IonPage, IonRouterOutlet, IonHeader, IonToolbar, 
     IonTitle, IonList, IonMenuButton, IonButton } from '@ionic/react';
import StripeCheckout from 'react-stripe-checkout';
import ReactPlayer from 'react-player';
import 'tachyons';
import Userauth from './auth.js';
import items from './data';
import { IoMdLogOut } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class premvideos extends Component{
    constructor(){
      super();
      this.state={
        isLoggedin:false,
        users:'',
        paid:false,
        password:'',
        firebasecode:''
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

loginpaiduser=()=>{
    var that=this;
  //get code fro firebase compare with the given code the set is paid to true
  database.ref('cuponcode').child("code").once('value').then(function(snapshot){
    const exists=(snapshot.val() !== null) 
  if(exists) var data=snapshot.val();
  that.setState({firebasecode:data})
  if (parseInt(that.state.password) === parseInt(that.state.firebasecode)){
    that.setState({paid:true});
  }else{toast('incorrect code',{type:'error'});} 
  console.log(that.state.firebasecode)
}
  )
}

logout=()=>{
    f.auth().signOut(); 
}


render(){

    return(
        <>
        <IonContent>
       <nav >
        <div >
          <div className="nav-header">
            <IonMenuButton ></IonMenuButton> 
            {this.state.isLoggedin===true? <IonButton onClick={this.logout}>logout <IoMdLogOut/></IonButton>:
             <div></div>}
          </div>
        </div>
      </nav>
        {this.state.isLoggedin===true?(this.state.paid===false?
            (
                <div className="roomsHerok">
                <div className="flex flex-column">
                <IonCard>
                    <IonCardContent> 
                        <Link to='/getcode' className="btn-primary"> click to get yours </Link>
                    </IonCardContent>
                </IonCard>
                <ToastContainer />
                <input placeholder='insert code here'  className="pa2 banner input-reset ba bg-transparent hover-bg-black hover-white w-100"type='password' onChange={(event)=>this.setState({password:event.target.value})}/>
                 <IonButton onClick={()=>this.loginpaiduser()}>click to start learning</IonButton>
                 </div>
                  </div>
            )
        :  
        <div className='code'>
        <div className="flex flex-column">
        {items.map(item => {
          return(<div>
          <h4 key={item.name}> {item.name}</h4>
            <Link to={`/videoplayer/${item.name}`} className="btn-primary room-link">
            watch video
          </Link>
          </div>
          );
        })}
        </div>
        </div>
        ):
        (
            <Userauth message={"please login to start learnig"}/> 
             )
            }
            </IonContent>
         </>
    );
}
}

export default premvideos;
