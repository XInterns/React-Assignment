import React from 'react';
import bootstrap from 'react-bootstrap';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

 function Imageheader(props)
{
        return(<div>
            
       </div>);
}
//import component from './component.js'
  /*var login=false;
  if(login==false)
  function Callfunction()
   {
      login=true;
   }
  {
    function Login(props) {      
      return (
        <div > 
      <form action="localhost:3000/enteruser">
       Name: <input type='text' placeholder='Enter UserName'></input><br></br>
       Password: <input type='text' placeholder='Enter Password'></input><br></br>
        
        <input type='submit' value='submit' onClick="Callfunction" ></input>
  
      </form>
       </div>
      );
    }
  }*/
// if(login==true)
class Info extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {value: '',
       error: null,
      isLoaded: false,
      item: [],
      input :'https://swapi.co/api/people/?search='
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }
      
      handleclick()
      {
        console.log('Searched name is:'+' '+this.state.value);
          
        var url=this.state.input+this.state.value;
        console.log('query: \n'+url);
       // console.log(this.state.item);
        fetch(url).
        then((response) => response.json())
        .then(
          parsedJson=> {
            this.setState(
              {
              isLoaded: true,
              item: parsedJson.results
            }
             );

          }, (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          })
          console.log(this.state.item);
      }
       
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
             this.handleclick();
             event.preventDefault();
      }
      handleclickonli(event)
      {
        return(<img src={require(this.state.img)}/>)

      }
      furtherdetails(name)
      {
          /* for(const i=0;i<items.length;i++)
           {
            if(items[i].name==name)
           {
             //return(
              <ol>
                   {item[i].map(items =>(
                 <li> {items.name}</li>
                 <li> {items.height}</li>
                 <li> {items.mass}</li>
                )
                )}
              </ol> 
            // )
           }
          }*/
          console.log(document.getElementById("abc"));
      } 
      onItemClick(event) {

        event.currentTarget.style.backgroundColor = '#ccc';
    
    }
    //if(login == true) 
    render()
    {   
      //if(login==false)
       { const { value, error, isLoaded, item, input } = this.state;
          if(item.length===0)
          {
            console.log('No Response');
          }
        return (
          <div id="div-id">
             <div>
            <form onSubmit={this.handleSubmit} className="image add">
              <label >
                 <input type="text" value={this.state.value} onChange={this.handleChange} placeholder= "Enter the name.." className="add2"/>
              </label>
              <input type="submit" value="Search" className="btn btn-primary" />
            </form>
            </div>
            <div class="container">    
               <ol className="Add" >
                  {item.map(items => (
                    <li key={item.name} type="button" value={this.state.value} onClick={() => {
                       this.setState({ image: item.name+".jpg" });
                      
                       return  (
                         <div> 
                       <ul className="color" >
                       <li>Mass: {item.mass}</li>
                       <li>Height: {item.height}</li> 
                       </ul>
                       </div>  )
                       
                       }} > 
                        {items.name}  <img className="space" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Yoda_Empire_Strikes_Back.png/220px-Yoda_Empire_Strikes_Back.png" alt="Icon"></img>
                        <ul className="box color" >
                         <li > Height: {items.height} </li>
                         <li> Mass: {items.mass} </li>
                         <li> Hair color: {items.hair_color}</li>
                         <li> Skin color: {items.skin_color}</li>
                         <li> Birth Year: {items.birth_year}</li>
                        </ul>
                    </li>
            
                  
                     ))}

               </ol>
             </div>
         </div>
          );
        }
    }
}
ReactDOM.render(<Info />, document.getElementById('root'));
//registerServiceWorker();

