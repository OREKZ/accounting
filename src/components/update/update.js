import React  from 'react';
import {f,database,storage,auth} from '../../config/config.js';
import Userauth from '../auth/auth.js';
import {IonHeader,IonFooter,IonButtons,IonToolbar,IonTitle, IonItem,IonLabel, IonText, IonContent, IonGrid ,IonRow,IonButton,IonCard,IonList,IonCol, IonInput, IonApp} from '@ionic/react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import{MdAddCircle,MdUpdate,MdSystemUpdateAlt,MdHome} from 'react-icons/md';
import { IoMdLogOut } from "react-icons/io";

class Update extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedin:false,
            users:''
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

UpdateUserProducts=()=>{
    if(this.props.price !='' && this.props.amount !=''&& this.props.productname !='' && this.props.packsize !=''
    && this.props.quantity !='' ){
        database.ref('/product/'+this.state.users+'/'+this.props.productname+'/price/').set(this.props.price);
        database.ref('/product/'+this.state.users+'/'+this.props.productname+'/amount/').set(this.props.amount);
        database.ref('/product/'+this.state.users+'/'+this.props.productname+'/packsize/').set(this.props.packsize);
        database.ref('/product/'+this.state.users+'/'+this.props.productname+'/quantity/').set(this.props.quantity);
        this.props.onroutechange('home');
    }else{
        alert('your products is empty');
    }
 }
    

render(){
        return( <div>
            {this.state.isLoggedin ===true? 
            (<div>
                  <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
          <IonButton onClick={()=>this.props.onroutechange('add')}>
          <MdAddCircle/>
          add</IonButton>
          <IonButton onClick={()=>this.props.onroutechange('home')}>
          <MdHome/>
          </IonButton>
       
          <IonButton onClick={this.logout}>logout <IoMdLogOut/></IonButton>
          </IonButtons>
        </IonToolbar>
       </IonHeader>
    <IonCard>
        <IonList>
            <IonItem>
            <IonText  class="i fw9">productname</IonText>
            <input value={this.props.updates.productname} onChange={this.props.onproductname}/>
            </IonItem>
            <IonItem>
            <IonText class="i fw9">amount</IonText>
            <input value={this.props.updates.amount} onChange={this.props.onamount}/>
            </IonItem>
            <IonItem>
            <IonText class="i fw9">price</IonText>
            <input value={this.props.updates.price} onChange={this.props.onprice}/>
            </IonItem>
            <IonItem>  
            <IonText class="i fw9">packsize</IonText>
            <input value={this.props.updates.packsize} onChange={this.props.onpacksize}/>
            </IonItem>
            <IonItem>
            <IonText class="i fw9">quantity</IonText>
            <input value={this.props.updates.quantity} onChange={this.props.onquantity}/>
            </IonItem>
            <IonItem>
            <IonButton  onClick={()=>this.UpdateUserProducts()}>update</IonButton>
            </IonItem>
            </IonList>
    </IonCard>


   
            </div>)
            :(
            <Userauth message={"please login to view your products"}/> 
             )

            }
        </div>);
    }
}
export default Update;
