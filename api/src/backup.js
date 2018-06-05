import React from 'react';


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      input:"https://swapi.co/api/people/?search="+this.props.Search_val,
    };
  }

  componentDidMount() {
   console.log('the query is \n'+this.state.input);
    //fetch("http://localhost:7000/people?name='Wedge Antilles'")
    fetch("https://swapi.co/api/people/?search=Yoda")
      .then((response) => response.json())
      .then(
        parsedJson=> {
          this.setState({
            isLoaded: true,
            items:parsedJson.results
          });
          console.log('Total records found are '+(this.state.items).length)
          console.log('Found something with parameters  '+this.props.Search_val+'    '+this.state.items);
          console.log(this.state.items);
          
        })
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      .catch((error) => {
        console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>
        <div>Error: {error.message}</div>
        <div>It will work sooon
          </div>
        </div>
    } 
    else 
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else 
    {
      return (
        <div>
        <ul>
          {items.map(item => (
            <li key={item.name}>
            {item.name}
          </li>
          ))}          
          {items.map(item => (
            <li key={item.height}>
            {item.height} 
          </li>
          ))}
        </ul>
        </div>
      );
    }
  }
}
class Search extends React.Component
{
  constructor(props)
    {
      super(props);
      this.state={
        name:'',
        buttonState:false
      };
      this.handleChange = this.handleChange.bind(this);
      this.printVal = this.printVal.bind(this);
    }
    

    handleChange(event) {
      this.setState({value: event.target.value});
      }
    printVal(event) {
      console.log('The value of name is '+this.state.value)
      this.setState({
        buttonState:true
      })
       event.preventDefault();
    }
    render()
    {
      if(this.state.buttonState===false)
      {
      return (
        <div className="main">

     <div className="search">
          <input type="text" value={this.state.value}  onChange={this.handleChange}/>
      </div>
          <div>
            <button onClick={this.printVal}>Search Me</button>
          </div>  
      
       </div>
      )
    }
    else
    {
      this.setState({
        buttonState:false
      })
      return (
      /*
      <div className="main">
      <form onSubmit={this.handleSubmit}>
      <label>
          <div className="search">
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
          <div>
            <button onClick={this.printVal}>Search Me</button>
          </div>  
     
         </label>  */   
      <div>
         <MyComponent Search_val={this.state.value}/>
      </div>
/*
      </form> 
      </div> 
      */
    )

    }
  }
}
export default Search