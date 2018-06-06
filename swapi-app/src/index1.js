import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value)
    this.setState(
      {value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      value:this.state.value
    })
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.props.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" onClick={this.props.onClick1}/>
              <input type="submit" value="Reset" onClick={this.props.onClick2}/>
      </form>
  )}
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      error: null,
      isLoaded: false,
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState(
      {value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({
      value:this.state.value
    })
    //alert('A name was submitted: ' + this.state.value);
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
    //console.log(this.state.value)
    if(this.state.value==='')
    {
      this.setState(
        {
          isLoaded:true,
          items:[]
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

  renderForm(){
    return(
      <Form value={this.state.value} onSubmit={()=>this.handleSubmit()} onChange={()=>this.handleChange()} onClick1={()=>this.componentDidMount()} onClick2={()=>this.reset()}/>
    )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      var records=items.map(item=>{return item})
      return (
        <div className="App">
          <header className="App-header">
          <img src="src/star.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <div className="bgimg">
          {this.renderForm()}
            {/* <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" onClick={()=>this.componentDidMount() }/>
              <input type="submit" value="Reset" onClick={()=>this.reset()}/>
            </form> */}
            <br/><br/><br/><br/><br/>
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