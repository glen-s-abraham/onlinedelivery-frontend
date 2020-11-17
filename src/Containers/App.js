//import '../public/Logo.svg';


import './App.css';
import React,{Component} from 'react';
import Navbar from './Navbar';
import ItemCard from '../Components/ItemCard';





class App extends Component{
  state={
    navStates:{
    showHome:true,
    showCart:false,
    showAccount:false,
    showHistory:false

    },
   
  }
  navLinkClickHandler=(item)=>{
   this.setState({
    navStates:{
    showHome:false,
    showCart:false,
    showAccount:false,
    showHistory:false
    }
    }); 
   switch(item){
    case "home":{
    this.setState({
    navStates:{
    showHome:true
    }
    });
    break;
    }
    case "account":{
    this.setState({
    navStates:{
    showAccount:true
    }
    });  
    
    break;
    }

    case "history":{
    this.setState({
    navStates:{
    showHistory:true
    }
    });
    break;
    }

    case "cart":{
    this.setState({
    navStates:{
    showCart:true
    }
    });
    break;
    }

   }

  }



  render(){
   let homePanel=null;
   let accountPanel=null;
   let historyPanel=null;
   let cartPanel=null;

   if(this.state.navStates.showHome)
   {
     homePanel=(
      <div>
      <div className="App__sidebar">
        <div className="App__sidebar_titlebox">
        <h1 className="App__sidebar_title">Categories</h1>
        </div>
          <div className="App__sidebar_categorybox ">
          <h2 className="App__sidebar_category">Vegetables</h2>
        </div>

        <div className="App__sidebar_categorybox Category__Active">
          <h2 className="App__sidebar_category">Fish</h2>
        </div>

        <div className="App__sidebar_categorybox">
          <h2 className="App__sidebar_category">Fruits</h2>
        </div>

        <div className="App__sidebar_categorybox">
          <h2 className="App__sidebar_category">Cereal</h2>
        </div>

      </div>
      <div class="App__body">
      
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>
        

      </div>
      </div>); 
   } 

   if(this.state.navStates.showAccount)
   {
    accountPanel=(
      <div className="App__other_panels">
        <h1>Accounts</h1>
      </div>
      );
   }

   if(this.state.navStates.showHistory)
   {
    accountPanel=(
      <div className="App__other_panels">
        <h1>History</h1>
      </div>
      );
   }

   if(this.state.navStates.showCart)
   {
    accountPanel=(
      <div className="App__other_panels">
        <h1>cart</h1>
      </div>
      );
   }
    return (
    <div className="App">
    <Navbar clicked={this.navLinkClickHandler} navStates={this.state.navStates}/>

    <body>
      {homePanel}
      {accountPanel}
    </body>
    </div>
    );
  }
  
  
}

export default App;
