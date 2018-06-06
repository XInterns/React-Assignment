import React from 'react';
import ReactDOM from 'react-dom';
import yoda from './yoda.jpg';

//import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var ser;



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
                  error: null,
                  isLoaded: false,
                  items: [],
                  img: '',

                  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(App.ser);

}

 fetchquery(ser)
 {
  fetch("https://swapi.co/api/people/?search="+ser)
  .then(res => res.json())
  .then(
    (result) => {
      this.setState({
        isLoaded: true,
        items: result.results
      });
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
  )
 }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    ser=this.state.value;
    console.log(ser);
    alert('A name was submitted: ' + this.state.value);
    this.fetchquery(this.state.value);
    event.preventDefault();
  }
 query(){return ser;}

handleclick(event){
return(
  <img src={require(this.state.img)}/>
)

}

  render() {
    const { error, isLoaded, items,img } = this.state;
    return (
      <div class="bg" >
      <div className="App">
        <header className="App-header"> 
          <h1 className="App-title" >Welcome to the Star Wars API</h1>
        </header>
        <p className="App-intro">
            <form onSubmit={this.handleSubmit}>
            <label>
             Name:
                 <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" /><br/>
            <ul style={{color:'black'}} >
          {items.map(item => (
            <div class="template">
            <div class="pic" height="80%"><img class="snap" src={yoda} alt="yoda" width="100%"/></div>
          
               <br/>
                  NAME: {item.name}<br/>
                  Mass: {item.mass}<br/>
                  Height:{item.height}
                   
          </div>                    
                         
          ))}
        </ul>
            </form>
            
        </p>
      </div>
      </div>

     

    );
  }
}
export default App;

