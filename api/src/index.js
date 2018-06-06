import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        isLoading: false,
        error: null,
        items: []
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event)
     {
        this.setState({
            value: event.target.value
                });
     }
        
   handleSubmit(event)
    {
        let coin = this.state.value;
        this.ComponentDidMount(coin);
        event.preventDefault();
        this.setState({
            isLoading : true
        });
    }
    ComponentDidMount(id)
     {
        fetch(`https://swapi.co/api/people/?search=${id}`, {
        }).then((response) => response.json())
        .then(
          (result) => {
          
            this.setState({
              isLoading: false,
              items: result.results
            });
          },
          (error) => {
            this.setState({
             isLoading: false,
              error
            });
          }
        )
    }
  
    render() {
    
      const { error,isLoading, items } = this.state;
      if (error) 
      {
        return <div>Error:{ error.message="no"}</div>;
      } 
      else 
      {
          
        return (
        <div id="outer">
            <form  onSubmit={this.handleSubmit} className="submit">
                <label>
                <span>  Name:</span>
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
             </form>
            <div id="data">
            <div id="big">
                {items.map(item => (
                
                 <div id="result">  <span id="text">Name: {item.name}<br /><br /> Mass: {item.mass}<br /><br />Height: {item.height}<br /><br /> DOB: {item.birth_year}<br />|</span></div>
                
               
                ))}
            </div>
            </div>
            {this.state.isLoading === true ? <div id="small"><h1>Loading...</h1></div> : <div />}
        </div>
       
        );
      }
      
    }
  }



ReactDOM.render(<MyComponent />, document.getElementById("root"));