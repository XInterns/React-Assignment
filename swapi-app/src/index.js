import React from 'react';
import ReactDOM from 'react-dom';
import logo from "./star.png"
import './index.css';
import './w3.css'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:undefined,
      error: null,
      isLoaded: false,
      items:[]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  reset(){
    this.setState({
      value:'',
      error: null,
      isLoaded: true,
      items: []
    })
  }

  componentDidMount() {
    if(this.state.value==='')
    { 
      alert("Nothing Entered")
      this.setState(
        {
          isLoaded:true,
        }
      );
    }
    else if(this.state.value===undefined)
    {
      this.setState(
        {
          isLoaded:true,
        }
      );
    }
    else{
      fetch("https://swapi.co/api/people/?search="+this.state.value)
      .then(res => res.json())
      .then(
        (parsedJSON) => {
          this.setState(
            {
            isLoaded: true,
            items: parsedJSON.results
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
    
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="load">Loading...</div>;
    } else {
      var records=items.map(item=>{return item})
      return (
        <div>
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        </div>
        <div className="bgimg">
            <center><form className="w3-container" onSubmit={this.handleSubmit}>
              <label className="w3-text-yellow">Enter Name of Character in the textbox</label><div></div>
              <input className="w3-input w3-animate-input" type="text" value={this.state.value} onChange={this.handleChange} />
              <div></div>
              <input className="w3-btn" type="submit" value="Submit" onClick={()=>this.componentDidMount() }/><span>&nbps;</span>
              <input className="w3-btn" type="submit" value="Reset" onClick={()=>this.reset()}/>
            </form></center>
            <div></div>
            <center><textarea value={JSON.stringify(records, null, '\t')} readOnly="true"/></center>
        </div>
       </div>
      );
    }
  }
}

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
);