import React  from 'react';
import {f,database,storage,auth} from '../../config/config.js';
import Userauth from '../auth/auth.js';
import {   IonToolbar,IonButtons,IonHeader, IonItem, IonText, IonContent, IonGrid ,IonRow,IonButton,IonCard,IonList,IonCol, IonInput} from '@ionic/react';
import{MdAddCircle,MdUpdate,MdSystemUpdateAlt,MdAddShoppingCart,MdHome} from 'react-icons/md';
import { IoMdLogOut } from "react-icons/io";

class Add extends React.Component{
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

addproducts=()=>{
    this.props.onamt();
    var userpro={
        price:this.props.price,
        amount:this.props.amount,
        packsize:this.props.packsize,
        quantity:this.props.quantity,
        amt:this.props.amt
    };
    if(this.props.price !='' && this.props.amount !=''&& this.props.productname !='' && this.props.packsize !=''
    && this.props.quantity !='' ){
        database.ref('/product/'+this.state.users+'/'+this.props.productname).set(userpro);
        this.props.onroutechange('home');
        console.log(this.state.amt);
    }else{
        alert('your products is empty');
    }
  
   /* database.ref('/product/'+this.state.users+'/'+this.props.productname+'/price/').set(this.props.price);
    database.ref('/product/'+this.state.users+'/'+this.props.productname+'/amount/').set(this.props.amount);
    database.ref('/product/'+this.state.users+'/'+this.props.productname+'/packsize/').set(this.props.packSize);
    database.ref('/product/'+this.state.users+'/'+this.props.productname+'/quantity/').set(this.props.quantity);
    this.props.onroutechange('home');*/
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
                            <IonItem><IonText>productname</IonText>  <input onChange={this.props.onproductname}/></IonItem>
                            <IonItem><IonText>amount</IonText> <input onChange={this.props.onamount}/></IonItem>
                            <IonItem><IonText>packsize</IonText>  <input onChange={this.props.onpacksize}/></IonItem>
                            <IonItem><IonText>quantity</IonText> <input onChange={this.props.onquantity}/></IonItem>
                            <IonItem><IonText>price</IonText> <input onChange={this.props.onprice}/></IonItem>
                            <IonButton  onClick={()=>this.addproducts()}>
                            <MdAddShoppingCart/>
                            </IonButton>
                        </IonList>
                
                    </IonCard>
               
            </div>
             )
            :(
            <Userauth message={"please login to view your products"}/> 
             )

            }
        </div>);
        }
    }
export default Add;

