import React from 'react';
import {f,database,storage,auth} from './config.js';
import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage,
IonTitle, IonToolbar,IonButton,IonApp, IonText, IonInput, IonGrid, IonRow, IonCol} from '@ionic/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Userauth extends React.Component{
    constructor(props){
        super(props);
        this.state={
            authstep:0,
            email:'',
            password:'',
            name:''
        }
    }

login=async()=>{
    var email=this.state.email;
    var password=this.state.password;

    if(email !='' && password !=''){
        
    try{
        let user=await auth.signInWithEmailAndPassword(email,password);
      }catch(error){
        console.log(error);
        toast('incorect credentials',{type:'error'});
    }
   }else{
    toast('user name or password is empty',{type:'error'});
  
  }

}

CreatUserObj=(userobj,email)=>{
   var uobj={
       name:this.state.name,
       username:'username',
       email:email
   } 
   database.ref('users').child(userobj.uid).set(uobj); 
}

 signup=async()=>{
    var email=this.state.email;
    var password=this.state.password;

    if(email !='' && password !=''){
        
    try{
        let user=await auth.createUserWithEmailAndPassword(email.trim(),password)
        .then((userobj)=>this.CreatUserObj(userobj.user,email))
        .catch((error)=>console.log(error));
        toast('incorect credentials',{type:'error'});
      }catch(error){
        console.log(error);
        toast('incorect credentials',{type:'error'});
    }
   }else{
    toast('email or password is empty',{type:'error'});
  }

}

render(){
     return(
            <div className="roomsHerok">
         <div className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" >
         { this.state.authstep==0 ? (
             <div  className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
             <IonButton onClick={()=>this.setState({authstep:1})}>login</IonButton>
             <IonText>or</IonText>
             <IonButton onClick={()=>this.setState({authstep:2})}>signup</IonButton>
            </div>):(
            <div>
            {this.state.authstep==1 ?(
                <div>
                    <IonGrid>
                        <IonRow justify-content-center align-Items-center>
                            <IonCol >
                            <IonButton onClick={()=>this.setState({authstep:0})}>cancel</IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow justify-content-center align-Items-center >
                            <IonCol>
                           
                            </IonCol>
                        </IonRow>
                        <IonRow justify-content-center align-Items-center>
                            <IonCol >
                                <IonText style={{color:'white'}}>email</IonText>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"type='email' onChange={(event)=>this.setState({email:event.target.value})}/>
                            </IonCol>
                        </IonRow>
                        <IonRow justify-content-center align-Items-center>
                            <IonCol>
                            <IonText  style={{color:'white'}}>password</IonText>
                            <input  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"type='password' onChange={(event)=>this.setState({password:event.target.value})}/>
                            </IonCol>
                        </IonRow >
                        <IonRow justify-content-center align-Items-center>
                            <IonCol>
                            <IonButton onClick={()=>this.login()}>login</IonButton>
                            <ToastContainer />
                            </IonCol>
                        </IonRow >
                    </IonGrid>
                    
                    </div>
            ):(
               <IonGrid>
                        <IonRow justify-content-center align-Items-center>
                            <IonCol>
                            <IonButton onClick={()=>this.setState({authstep:0})}>cancel</IonButton>
                            </IonCol>
                        </IonRow >
                        <IonRow justify-content-center align-Items-center>
                            <IonCol>
                        
                            </IonCol>
                        </IonRow >
                        <IonRow justify-content-center align-Items-center>
                            <IonCol>
                            <IonText  style={{color:'white'}}>email</IonText>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type='email' onChange={(event)=>this.setState({email:event.target.value})}/>
                            </IonCol>
                        </IonRow >
                        <IonRow justify-content-center align-Items-center>
                            <IonCol>
                            <IonText  style={{color:'white'}}>password</IonText>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type='password' onChange={(event)=>this.setState({password:event.target.value})}/>
                            </IonCol>
                        </IonRow >
                        <IonRow justify-content-center align-Items-center>
                            <IonCol>
                            <IonText  style={{color:'white'}}>name</IonText>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={(event)=>this.setState({name:event.target.value})}/>
                            </IonCol>
                        </IonRow >
                        <IonRow justify-content-center align-Items-center>
                            <IonCol>
                            <IonButton onClick={()=>this.signup()}>register </IonButton>
                            <ToastContainer />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
          
               )} 
         </div>)}
         </div>
        </div>
);
 }
}
export default Userauth;


