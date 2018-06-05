import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppLayout from './App';
import registerServiceWorker from './registerServiceWorker';

class DataRenderClass extends React.Component{
    renderFunction(){
        
    }
    
    
    render(){
        

        return (
            <div>
    
            <AppLayout />
            </div>
        );
    }
}


class DataFetchClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded : false,
            items: []
        };
    }

    // retrieveQuery(){
    //     var query = getElementById('query').value;
    //     console.log(query);
    // }

    componentDidMount(){
        fetch('https://swapi.co/api/people')
        .then( res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded : true,
                    items: result.results
                });
                console.log(this.state.items);;
            },
            (error) => {
                this.setState({
                    isLoaded : false,
                    error
                });
            }
        )
    

    }


    render() {
       const { error, isLoaded, items } = this.state;
       if (error) {
         return <div>Error: {error.message}</div>;
       } else if (!isLoaded) {
         return <div>Loading...</div>;
       } else {
         return (
           <ul>
             {items.map(item => (
               <li key={item.name}>
                 {item.name} {item.mass}
               </li>
             ))}
           </ul>
         );
       }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
