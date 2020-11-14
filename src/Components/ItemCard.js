import React from 'react';
import './ItemCard.css'
import default_image from './default-image.png'

const itemCard=(props)=>{
	return(
		<div className="App__body_card">
          <div className="App__body_card_imagebox">
            <img className="App__body_card_image" src={default_image}/>
          </div>
          <div className="App__body_card_titlebox">
            <h1>Title goes here</h1>
          </div>
          <div className="App__body_card_pricebox">
            <h2>₹80</h2>
          </div>
          <div className="App__body_card_qtybox">
            <h2>QTY <select><option>1</option><option>2</option><option>3</option></select></h2>
          </div>
          <div>
            <button className="App__body_card_button">Add To cart</button>
            </div>
          </div>
		);
}

export default itemCard;