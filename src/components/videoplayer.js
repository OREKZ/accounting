import React, { Component } from "react";
import { Link } from "react-router-dom";
import items from './data';
import ReactPlayer from 'react-player';
import {IonMenuButton, IonContent} from '@ionic/react';


export default class videoplayer extends Component {
    constructor(props) {
      super(props);
      console.log(this.props);
      this.state = {
        slug: this.props.match.params.slug,
        url:''
      };
      console.log(this.state.slug);
    }

    getRoom (slug,items) {
        let tempRooms = [...items];
        const room = tempRooms.find(item => item.name === slug);
        const main= room.url;
        const tame=room.name;
        this.setState({url:main});
        console.log(main);
        console.log(tame);
      };

   componentDidMount(){
       this.getRoom(this.state.slug,items);
   }

render(){
    return( 
      <IonContent>
        <div >
    <div className='player-wrapper'>
    <ReactPlayer
      className='react-player'
      url={this.state.url}
      width='100%'
      height='100%'
      controls={true}
    />
 </div>
 <Link to='/premvideos' className="btn-primary room-link"> Back to video selection</Link>
 <h1>wait for the video to load</h1>
  </div>
  </IonContent>)

}
}