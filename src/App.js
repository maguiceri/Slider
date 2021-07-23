import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import "./App.css";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.setting = {
      slidesToShoe:4,
      slidestoscroll:1,
      infinite:false
    }
  }
  render(){
    return(
      <div>
        <h1>Checkout</h1>
        <div className="contact">
          <h2>Contact information</h2>
          <label className="input" for="name">E-mail</label>
          <input  type="text" id="name" placeholder="Enter your email..."/>
          <label className="input" for="name">Phone</label>
          <input  type="text" id="name" placeholder="Enter your phone..."/>
        </div>
        <div className="Address">
        <label className="input" for="name">Full name</label>
          <input  type="text" id="name" placeholder="Enter your full name..."/>
          <label className="input" for="name">Address</label>
          <input  type="text" id="name" placeholder="Your address..."/>
          <label className="input" for="name">City</label>
          <input  type="text" id="name" placeholder="Your city"/>
        </div>
        <select>
          <option>1</option>
        </select>
        <FontAwesomeIcon icon={faCoffee} />
        <Slider {...this.setting}>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
          <div>
            <img src="https://picsum.photos/id/237/200/300"></img>
          </div>
        </Slider>
      </div>
    )
  }
}

export default App;