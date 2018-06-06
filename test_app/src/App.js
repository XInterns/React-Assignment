import React, { Component } from 'react';
import logo from './profile/starwars.png';
import jabba from './profile/jabba.jpeg';
import chewbacca from './profile/chewbacca.jpeg';
import lukeskywalker from './profile/lukeskywalker.jpeg';
import obiwankenobi from './profile/obiwankenobi.jpeg';


import './App.css';

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Star Wars Person Finder</h1>
        </header>

      </div>
    );
  }
}

class AppLayout extends Component {

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
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.callFunction();
    event.preventDefault();
    console.log("the value printed is " + this.state.value);
  }

  render() {
    const items = this.state.items;


    return (
      <div className="App">
        <HeaderComponent />
        <div className="Content-Area">
          <form onSubmit={this.handleSubmit}>
            <label className="Label">
              Query::
          </label>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="search_parameter" />

            <input type="submit" value="Submit" />
          </form>
          <div className="flex-container">
            {items.map(item => (
              
                <div className="card">
                  <img src={logo} alt="jabba" width="100%" />

                  <div className="container">


                    <p>Name: {item.name}<br />
                      Height: {item.height}<br/>
                      Birth-Year: {item.birth_year}<br/>
                      Mass: {item.mass}</p>

                  </div>

                </div>

            ))}
          </div>


          {/* <ul>
             {items.map(item => (
               
               <li key={item.name}>
                 Name: {item.name} {item.mass}
               </li>  
             ))}
           </ul> */}
          {/* <textarea className="textarea" value={JSON.stringify(items,null,'\t'  )}></textarea> */}

        </div>
      </div>
    );
  }


  callFunction() {
    fetch('https://swapi.co/api/people/?search=' + this.state.value)
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
            isLoaded: false,
            error
          });
        }
      )


  }

}

export default AppLayout;
