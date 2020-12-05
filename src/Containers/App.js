//import '../public/Logo.svg';


import './App.css';
import React,{Component} from 'react';
import Navbar from './Navbar';
import HomePanel from './HomePanel';
import AccountsPanel from './AccountsPanel';

class App extends Component{
  state={
    navStates:{
    showHome:false,
    showCart:false,
    showAccount:true,
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
      <HomePanel/>
      );
   } 

   if(this.state.navStates.showAccount)
   {
    accountPanel=(
      <AccountsPanel/>
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
