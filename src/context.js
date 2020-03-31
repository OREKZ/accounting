import React, { Component } from 'react';
const ProductContext=React.createContext();

class ProductProvider extends component{
    constructor(){
     state={}
}

consoling=()=>{
    console('its good')
}
render(){
       return(
          <ProductContext.Provider value={{
              ...this.state,
              consoling:this.consoling
              }}>
            {this.props.children}
          </ProductContext.Provider>
       );
   }
}

const ProductConsumer=ProductContext.Consumer;

export{ProductConsumer,ProductProvider};