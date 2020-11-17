import React from 'react';
import './NavLink.css'
const navLink=(props)=>{

	return(
			<div className="App__navbar_link_div" >

            <span  className={props.navStates.showHome?"App__navbar_link Active__link":"App__navbar_link"} onClick={()=>props.clicked("home")}>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </span>
  
            <span  className={props.navStates.showAccount?"App__navbar_link Active__link":"App__navbar_link"} onClick={()=>props.clicked("account")}>
                <svg  xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
            </span>

            <span  className={props.navStates.showHistory?"App__navbar_link Active__link":"App__navbar_link" } onClick={()=>props.clicked("history")}>
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                <path d="M0 0h24v24H0z" fill="none"/><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                </svg>

            </span>

            <span  className={props.navStates.showCart?"App__navbar_link Active__link":"App__navbar_link"} onClick={()=>props.clicked("cart")}>
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
            </span>
          </div>

		);

}

export default navLink;