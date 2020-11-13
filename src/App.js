//import '../public/Logo.svg';


import './App.css';
import InlineForm from './Components/InlineForm'
import './default.jpg'




function App() {
  return (
    <div className="App">
    <header>
      <div className="App__navbar">
        <div className="App__navbar_logo_box">
          
          <span >
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="60" viewBox="0 0 317.375 147.621">
              <g id="Logo" transform="translate(-217 -34)">
                <path id="Path_1" data-name="Path 1" d="M48.811,34.5c-5.87-8.387-19.063,5.914-26.831-1.74s-5.2-18.782-10.691-26.767S0,.824,0,.824,28.389-2.138,42.708,2.8,57.273,20.557,57.273,20.557s-4.512,34.267-6.9,45.7-4.916.054-4.916.054S54.68,42.888,48.811,34.5Z" transform="translate(432.585 63.542) rotate(22)" fill="#4ca456"/>
                <path id="Path_2" data-name="Path 2" d="M49.094,37.007c-5.827,8.316-19.164-6.045-26.9,1.525s-5.076,18.685-10.531,26.6S.374,70.2.374,70.2s28.5,3.175,42.827-1.631S57.683,50.975,57.683,50.975s-4.772-34.2-7.248-45.616S45.5,5.266,45.5,5.266,54.921,28.691,49.094,37.007Z" transform="matrix(-0.719, -0.695, 0.695, -0.719, 485.163, 182.068)" fill="#4ca456"/>
                <text id="Nature" transform="translate(220 141)" fill="#000000" font-size="96" font-family="AnettePersonalUse, Anette Personal Use"><tspan x="0" y="0">N</tspan><tspan y="0" font-size="80">ature</tspan></text>
                <text id="store" transform="translate(377 168)" fill="#394241" font-size="40" font-family="Haettenschweiler"><tspan x="0" y="0">store</tspan></text>
              </g>
            </svg>
          </span>  


          <InlineForm />
          <div className="App__navbar_link_div">
            <span className="App__navbar_link Active__link">
                <svg  xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
            </span>

            <span className="App__navbar_link">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                <path d="M0 0h24v24H0z" fill="none"/><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                </svg>

            </span>

            <span className="App__navbar_link">
                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
            </span>
          </div>

        </div>
      </div>
    </header>
    <body>
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
        <div className="App__body_card">
          <div className="App__body_card_imagebox">
            <img className="App__body_card_image" src="./default.jpg"/>
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
        

      </div>
    </body>
    <footer>
    </footer>
       
    </div>
  );
}

export default App;
