//aaccesed with coupon code genereted from firebase database
import React, { Component } from 'react';
import { thisExpression } from '@babel/types';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import {f,database,storage,auth} from './config.js';
import userauth from './auth';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,
     IonBadge,IonHeader,IonToolbar,IonMenuButton,IonContent,IonTitle ,IonList,IonItem, IonButton, IonCard} from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
import { IoMdLogOut } from "react-icons/io";


class prempdf extends Component{
    constructor(){
      super();
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
logout=()=>{
    f.auth().signOut(); 
}
   render(){
       return(
          <>
         <nav >
        <div >
          <div className="nav-header">
            <IonMenuButton ></IonMenuButton> 
            {this.state.isLoggedin===true? <IonButton onClick={this.logout}>logout <IoMdLogOut/></IonButton>:
             <div> <Link to='/premvideos' >
            <IonButton>login</IonButton>
           </Link></div>}
          </div>
        </div>
      </nav>
      <IonContent>
     {/* the content */}
     <div  className=" roomsHer" >
        <div > <Link to='/getcode'><IonButton>click to subscribe to our video course</IonButton></Link></div>
         <IonCard>
         <p style={{color:"white",paddingLeft:"30px",paddingRight:"25px",fontSize:"25px"}}>
By far, the Forex market is the largest trading market in the world. It sees roughly $4
trillion in volume daily, compared to the estimate of $28 billion at the NYSE. In fact,
even all the world’s stock markets combined does not even come close to what Forex
has to offer.
Being the largest market in the world comes with its benefits for individuals. Basic
rules of supply and demand combined with the needs of competitive advantage means
that the spreads are much lower than other markets. More brokers, more
competitiveness, less spreads!
The FOREX trading market also reflects actual economies and fundamentals, as
opposed to how a certain business is performing inside a certain economy inside a
certain marketplace. An individual can easily research on what is going on around
different parts of the world, but it would be close to impossible to obtain data on how a
company is functioning behind closed doors. Here, success rates have a greater
correlation to how much effort an individual puts into his research.
Technological advancements and the wide availability of brokers make it very easy for
individuals to begin Forex Trading. Many brokers also allow a leverage system,
whereby it allows for participants to leverage a small amount of money into a large
sum, potentially increasing profits many folds.
The Forex market is also open 24 hours a day for 5 days a week, allowing participants
flexibility to trade anywhere and anytime they choose to, unlike in stock markets where
they close and open on a daily basis.
         </p>
         </IonCard>
         <IonCard>
         <img style={{paddingLeft:"50px",paddingRight:"50px"}} height='300' width='120' src="data:image/png;base64,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"></img>
         <p style={{color:"white",paddingLeft:"30px",paddingRight:"25px",fontSize:"25px"}}>
         Candlestick charts are one of the oldest types of charts used for price prediction. It
dates back to the 1700's, when the chart was used to predict the rise and fall of rice
prices.
Munehisa Homma, considered to be the founding father of the candlestick chart, created
his own charts to make fortunes from rice trading. Eventually, he rose from humble rice
merchant to discerning financial advisor for the Japanese Government.
The tool once used for rice trading is now applicable for Forex too. Today, candlesticks
are the brass tacks of every trader’s chart watching. It has helped them to follow and
analyze the trends.
         </p>
         </IonCard>
    </div>
      </IonContent> 
      </>
       );
   }
}
export default prempdf;
