import React  from 'react';
import {IonHeader,IonSearchbar,IonFooter,IonButtons,IonToolbar,IonTitle, IonItem,IonLabel, IonText, IonContent, IonGrid ,IonRow,IonButton,IonCard,IonList,IonCol, IonInput, IonApp} from '@ionic/react';
import Userauth from '../auth/auth.js';
import {f,database,storage,auth} from '../../config/config.js';
import FlatList from 'flatlist-react';
import{MdAddCircle,MdUpdate,MdSystemUpdateAlt} from 'react-icons/md';
import { IoMdLogOut } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedin:false,
            isUpdate:false,
            products:[],
            users:'',
            search:''
        }
    }

componentDidMount=()=>{
     var that=this;
     f.auth().onAuthStateChanged(function(user){
           if(user){
             var userid=f.auth().currentUser;
             var userids=userid.uid;
              that.setState({users:userids});
             that.fetchUserProducts(that.state.users);
            }else{
                that.setState({isLoggedin:false});
            }
        });
}

fetchUserProducts=(userid)=>{
    this.setState({products:[]});
    var that=this;
    database.ref('product').child(userid).once('value').then(function(snapshot){
        const exists=(snapshot.val() !== null);
        if(exists) var data=snapshot.val();
        var products=that.state.products;
        for(var productid in data){
            var productobj=data[productid];
            products.push({
                productname: productid,
                price:productobj.price,
                amount:productobj.amount,
                packsize:productobj.packsize,
                quantity:productobj.quantity
            });
           } that.setState({isLoggedin:true});
    }).catch(error=>console.log(error))
 
}

logout=()=>{
        f.auth().signOut(); 
}

 UpdateUserProducts=()=>{
    /* database.ref('products').child(this.state.user).child(this.props.productname).child('price').set(this.props.price);
        database.ref('products').child(this.state.users).child(this.props.productname).child('amount').set(this.props.amount);
        database.ref('products').child(this.state.users).child(this.props.productname).child('packsize').set(this.props.packsize);
        database.ref('products').child(this.state.users).child(this.props.productname).child('quantity').set(this.props.quantity)
            this.setState({isUpdate:false});*/
            console.log(this.props.amount);
            console.log(this.props.packsize);
            console.log(this.props.price);
            console.log(this.props.quantity);
            console.log(this.props.productname);
    
}
Renderblank=()=>{
    return(
        <div className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
            <IonButton onClick={()=>this.props.onroutechange('add')}>no products available</IonButton>
        </div>
      
    )
}



render(){
const  CardComponent= ({item}) => ( 
    
        <IonCard>
           <IonList>
             <IonItem><IonText>PRODUCT:{item.productname}</IonText></IonItem>
             <IonItem>  <IonText class="i fw9" >PRICE:{item.price}</IonText></IonItem>
             <IonItem> <IonText class="i fw9">QUANTITY:{item.quantity}</IonText></IonItem>
             <IonItem>  <IonText class="i fw9">PACKSIZE:{item.packsize}</IonText></IonItem>
             <IonItem> <IonText class="i fw9">AMOUNT:{item.amount}</IonText></IonItem>
            <div onClick={()=>this.props.updated(item)}>
               <IonItem>
               <IonButton onClick={()=>this.props.onroutechange('update')}>
               <MdSystemUpdateAlt/>
               update</IonButton>
               </IonItem>
            </div>
          </IonList>
        </IonCard>

  )
  const  CardComponentUpdate= ({item}) => ( 
    
         <IonCard>
             <IonList>
            <input value={item.productname} type="text" onChange={this.props.onproductname}/>
            <input value={item.amount} type="text"  onChange={this.props.onamount}/>
            <input value={item.price} type="text" onChange={this.props.onprice}/>
            <input value={item.packsize} type="text" onChange={this.props.onpacksize}/>
            <input value={item.quantity} type="text" onChange={this.props.onquantity}/>
            <IonButton onClick={()=>this.UpdateUserProducts()}>update</IonButton>
             </IonList>
         </IonCard>

  )

const productComponent=this.state.products.map((pro,i)=>{
    return(
        <IonCard>
           <IonInput value={this.state.products[i].productname} onChange={this.props.onproductname}>productname</IonInput>
           <IonInput value={this.state.products[i].amount} onChange={this.props.onamount}>amount</IonInput>
           <IonInput value={this.state.products[i].price} onChange={this.props.onprice}>price</IonInput>
           <IonInput value={this.state.products[i].quantity} onChange={this.props.onpacksize}>packsize</IonInput>
           <IonInput value={this.state.products[i].packsize} onChange={this.props.onquantity}>quantity</IonInput>
           <IonButton onClick={this.UpdateUserProducts}>save</IonButton>
        </IonCard>
        
    )
})
return( <div>
            {this.state.isLoggedin ===true? 
            (<div>
                {this.state.isUpdate==false?
            <div>
                 <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
          <IonButton onClick={()=>this.props.onroutechange('add')}>
          <MdAddCircle/>
          add</IonButton>

          <IonButton onClick={this.logout}>logout <IoMdLogOut/></IonButton>
          </IonButtons>
        </IonToolbar>
       </IonHeader>
        <IonCard>
        <FaSearch/> <input placeholder="search products" value={this.state.search} onChange={(event)=>this.setState({search:event.target.value})}/>
        </IonCard>
       
             <FlatList list={this.state.products} renderItem={<CardComponent/>}
             searchTerm={this.state.search}
             searchBy="productname"
             renderWhenEmpty={this.Renderblank}/>
            
            </div>
               :(
          <div>
              <FlatList list={this.state.products} renderItem={<CardComponentUpdate/>}
                          searchTerm={this.state.search}
                          searchBy="productname"/>
    <IonFooter>
      <IonToolbar>
        <IonTitle>contek 2020</IonTitle>
      </IonToolbar>
    </IonFooter>
        </div>
            )}

             </div>)
            :(
                    <Userauth message={"please login to view your products"}/> 
            
             )

            }
        </div>);
    }
}
export default Home;

