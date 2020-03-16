import React,{Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, 
           IonTitle, IonToolbar,IonButton,IonApp, IonMenu} from '@ionic/react';
import Add from './components/add/add';
import Update from './components/update/update';
import Signin from './components/Signin/Signin';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import {f,database,storage,auth} from './config/config.js';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            productname:'',
            packSize:'',
            quantity:'',
            price:'',
            amount:'',
            amt:'',
            isSignedIn: false,
            routes:'home',
            products:[],
            searchfield:'',
            updates:[]
            
        }
    }
onroutechange=(route)=>{
    if (route === 'signout') {
        this.setState({isSignedIn: false})
      } else if (route === 'home') {
        this.setState({isSignedIn: true})
      }
 this.setState({routes:route})
}

onproductname=(event)=>{
    this.setState({productname:event.target.value})
}
onpacksize=(event)=>{
    this.setState({packSize:event.target.value})
}
onprice=(event)=>{
    this.setState({price:event.target.value})
}
onquantity=(event)=>{
    this.setState({quantity:event.target.value})
}

onamount=(event)=>{
    this.setState({amount:event.target.value})
}

onsearchfield=(event)=>{
    this.setState({searchfield:event.target.value})
}

onamt=()=>{
    var a=parseFloat(this.state.price);
    var b=parseFloat(this.state.quantity);
    const rounded = a * b;
    var d= rounded.toString();
    this.setState({amt:d});

}

updated=(item)=>{
    var uping=[];
    uping.push({
        price: item.price,
        quantity:item.quantity,
        productname:item.productname,
        packsize :item.productsize,
        amount:item.amout
     }
    );
this.setState({updates:uping})
}

render(){
    const {updates,amt, productname,packSize, quantity, price,amount, routes, searchfield ,fetchproduct, isSignedIn} = this.state;
    if (this.state.routes==='signin'){
        return(
        <ion-app>
         
            <Signin onroutechange={this.onroutechange}/>
        </ion-app>
            );
    }else if (this.state.routes==='update'){
        return( <ion-app>
            
  <Update onroutechange={this.onroutechange} 
 onsearchfield={this.onsearchfield}
 onquantity={this.onquantity}
 onprice={this.onprice}
 onpacksize={this.onpacksize}
 onproductname={this.onproductname}
 onamount={this.onamount}
 // here we set state
packsize={packSize}
 productname={productname}
 price={price}
 quantity={quantity}
 updates={updates}
 amount={amount}/>
            </ion-app>
           );
}else if (this.state.routes==='add'){
        return(
            <div>
             
            <Add onroutechange={this.onroutechange}
            // here we update the stateupdate
            onquantity={this.onquantity}
            onprice={this.onprice}
            onpacksize={this.onpacksize}
            onproductname={this.onproductname}
            onamount={this.onamount}
            onamt={this.onamt}
            // here we set state
           packsize={packSize}
            productname={productname}
            price={price}
            quantity={quantity}
            amount={amount}
            amt={amt}
            />
            </div>
            
        );
}else if (this.state.routes==='register'){
        return(<ion-app>
         
              <Navigation onroutechange={this.onroutechange} isSignedIn={this.isSignedIn}/>
               <Register onroutechange={this.onroutechange}/>
            </ion-app>
        );
}else if  (this.state.routes==='home'){
        return(
        <IonApp>
           
            <Home  
 onroutechange={this.onroutechange} 
 onsearchfield={this.onsearchfield}
 onquantity={this.onquantity}
 onprice={this.onprice}
 onpacksize={this.onpacksize}
 onproductname={this.onproductname}
 onamount={this.onamount}
 updated={this.updated}
 // here we set state
packsize={packSize}
 productname={productname}
 price={price}
 quantity={quantity}
 updates={updates}
 amount={amount}/>
        </IonApp>
                 
        
             );
    }
   
};
}

export default App;