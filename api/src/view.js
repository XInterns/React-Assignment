import React from 'react';
import pic from './rey.jpg';
import back from './sw.jpg';
import './index.css'
function DisplayHeader(){
  console.log("display header")
    return (
    <header className="customizeHeader">
      <img src={back} className="customizeHeader"/>
    </header>
  );
}
function disp(data){
var lines=[];
  for (var p in data) { {
      
      lines.push(<tr><td> {p} </td><td> {data[p]}</td></tr>)
    }
  }
  return lines;
}
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      input:"https://swapi.co/api/people/?search=",
      name:'',
      buttonState:false,
      clickButton:false,
      clickIndex:-1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.printVal = this.printVal.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    }
  printVal(event) {
    this.setState({
      buttonState:true,
       })
    this.callFunction()
     event.preventDefault();
  }
  callFunction() {
    var x=this.state.input+this.state.value;
     fetch(x)
    .then((response) => response.json())
    .then(
      parsedJson=> {
        this.setState({
          isLoaded: true,
          items:parsedJson.results,
          });
        
      })
       .catch((error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  renderHeader(){
    return (<DisplayHeader />)
  }

  render() {
    if(this.state.buttonState==false)
    {
    return (
      <div className="main">
      {this.renderHeader()}
   <div className="search">
        <input type="text" value={this.state.value} placeholder="Enter Name" onChange={this.handleChange} className="textbox1"/>
       </div>
        <div>
                <center>
                <button onClick={this.printVal}>Search</button>
                </center>
        </div>  
     </div>
    )
  }
  else{
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>
        <div>Error: {error.message}</div>
        <div>It will work sooon
          </div>
        </div>
    } 
    else 
    {
      var attrib=this.setState;
      var lines =[];
       //this.state.items.map(function(line, i)
       for(var i=0;i<items.length;i++) 
       {
         var div_val;
         if(items.length==1)
          div_val="div2"
          else
          div_val="div1"
         lines.push(
          <div className={div_val}>
          <div className="img">
                <span key={items[0].name}>
                    <img className="picture" src={pic} />
                  </span>
                  </div>
                { 
                  disp(items[i])
                }
            </div>
        );
      };
        return (
          <div className="main">
          {this.renderHeader()}
                <div className="search">
                      <input type="text" value={this.state.value} placeholder="Enter Name" onChange={this.handleChange}/>
                </div>
                <div>
                  <center>
                  <button onClick={this.printVal}>Search</button>
                  </center>
                </div>  
          <div className="container">
              {lines}
          </div>
        </div>
        )
    }
  }
}
}
export default MyComponent
