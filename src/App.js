import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showError:false
    };
  }
  
  Decrement=()=>{
    if (this.state.counter!=0)
        {
          this.setState({ counter: this.state.counter - 1})
        }
    else this.setState({counter:this.state.counter = 0,
      showError:true})
  }
 

  render() {
    return (
      <div data-test="component-app">
      <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
      <button
        data-test="increment-button"
        onClick={() => this.setState({ counter: this.state.counter + 1 , showError:false})}
        >
        Increment counter
      </button>
      <br/>
      <button
      data-test="decrement-button"
      onClick={this.Decrement}>Decrement-button</button>
      <div className={this.state.showError==true?"d-block":"d-none"} data-test = "error-message" > It's an error. The counter can't go below zero.</div>
      </div>
    );
  }
}

export default App;