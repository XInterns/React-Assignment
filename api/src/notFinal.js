import React from 'react';
import pic from './Yoda.jpeg'
import back from './sw.jpg'
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
  //var lines = this.state.testLines.map(function(line, i) {
    // This is just an example - your return will pull information from `line`
    // Make sure to always pass a `key` prop when working with dynamic children: https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
    //return (
      //<
      //for (var p in data) {
       // for (var k in data[p]) {
         // rows += '<tr><td>' + k + '</td><td>' + data[p][k] + '</td></tr>'
        //}
     // }
   // );
  //});
var lines='';
lines.push(<table border='0' className="content" id="tableContent">)
  for (var p in data) { {
      lines+=(<tr><td> + {p} + </td><td> + {data[p]}+ </td></tr>)
    }
  }
  lines.push(</table>)
  return lines;


}

function DisplayDetails(items)
{
  return (
    <div >
              <table border='0' className="content" id="tableContent">
                <tr>
                  <td className="key">Name</td>
                  <td className="value">
                    <span key={items.name}>
                    {items.name}
                    </span>
                  </td>
                  </tr>
                  <tr>
                  <td className="key">Height</td>
                  <td className="value">
                    <span key={items.height}>
                    {items.height}
                    </span>
                  </td>
                  </tr>
                  <tr>
                  <td className="key">Mass</td>
                  <td className="value">
                    <span key={items.mass}>
                    {items.mass}
                    </span>
                  </td>
                  </tr>
                  <tr>
                  <td className="key">Date Of Birth</td>
                  <td className="value">
                    <span key={items.birth_year}>
                    {items.birth_year}
                    </span>
                  </td>
                  </tr>
              
              </table>
              </div>
  )
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
    console.log('\nname is '+this.state.value)
    //console.log('back is '+pathName)
    var x=this.state.input+this.state.value;
   console.log('the query is \n'+x);
    //fetch("http://localhost:7000/people?name='Wedge Antilles'")
    fetch(x)
    .then((response) => response.json())
    .then(
      parsedJson=> {
        this.setState({
          isLoaded: true,
          items:parsedJson.results,
          });
        console.log('Total records found are '+(this.state.items).length)
        console.log('Found something with parameters '+this.state.value);
      
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
setAttrib(i)
{
  console.log('attribute is set'+i);
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
      {/* <displayHeader /> */}
   <div className="search">
        <input type="text" value={this.state.value}  onChange={this.handleChange} className="textbox1"/>
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
    if (!isLoaded) {
      
    console.log('\nInside this  ');
      return (<div className='main'>
        {this.renderHeader()}Loading...</div>)
    } else 
    {
      var data=this.state.items;
      for (var p in data) {
        for (var k in data[p]) {
          console.log(k + '  ' + data[p][k] + '  ');
        }
      }
      if(this.state.items.length==1){
      return (
       <div className="main">
      {this.renderHeader()}
            <div className="search">
                  <input type="text" value={this.state.value}  onChange={this.handleChange}/>
            </div>
            <div>
              <center>
              <button onClick={this.printVal}>Search Me</button>
              </center>
            </div>  
          
            <div align="center">
              {DisplayDetails(items[0])}
              </div>
              <div>
                <span key={items[0].name}>
                    {
                      console.log("./"+items[0].name+".jpeg")
                    }
                      <img className="picture" src={items[0].name=='Yoda'?pic:back} />
                    </span>
              </div>
        </div>
      );
    }
    else
    if(this.state.clickButton==false)
    {
      var attrib=this.setState;
      var lines =[];
       //this.state.items.map(function(line, i)
       for(var i=0;i<items.length;i++) 
       {
         console.log('Inside the loop');
        // This is just an example - your return will pull information from `line`
        // Make sure to always pass a `key` prop when working with dynamic children: https://facebook.github.io/react/docs/multiple-components.html#dynamic-children
        lines.push(
          <div className="div1" onClick={this.setAttrib}>
                {
                  
                  disp(items[i])
                }
              
              <span key={items[0].name}>
                  {
                    console.log("./"+items[0].name+".jpeg")
                  }
                    <img className="picture" src={items[0].name=='Yoda'?pic:back} />
                  </span>
            </div>
        );
      };
        return (
          <div className="main">
          {this.renderHeader()}
                <div className="search">
                      <input type="text" value={this.state.value}  onChange={this.handleChange}/>
                </div>
                <div>
                  <center>
                  <button onClick={this.printVal}>Search Me</button>
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
}

export default MyComponent
