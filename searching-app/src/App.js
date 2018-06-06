import React, { Component } from 'react';
import logo from './Slogo.svg';
import './App.css';

//var input_url=0;
class Header extends Component {
render(){
return(
  <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WELCOME TO STAR WARS SEARCH</h1>
  </header>        
);
}
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    value: '',
    error: null,
    isLoaded: false,
    items: []
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const input_url= this.state.value;
    this.fetchfunction(this.state.value);
    //window.location.assign("https://swapi.co/api/people/?search="+input_url);
    event.preventDefault();
    
  }

  fetchfunction(inputState) {
    fetch("https://swapi.co/api/people/?search="+inputState)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
         
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <div className="App">
      <Header />
	        <form onSubmit={this.handleSubmit}>
	        <input type="text" id="name" className="Text-box" value={this.state.value} onChange={this.handleChange}></input>
          <button type="submit" value="Submit">Search</button>
          <ul>
             {items.map(item => (
               <li key={item.name}>
                 {item.name}
                
               </li>
             ))}
           </ul>
          </form>
      </div>
    );
  }
}

export default App;
