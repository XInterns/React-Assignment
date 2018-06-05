import React from 'react';
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
 
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    //fetch("http://localhost:7000/people?name='Wedge Antilles'")
    fetch("https://swapi.co/api/people/?search=Yoda")
      .then((response) => response.json())
      .then(
        parsedJson=> {
          this.setState({
            isLoaded: true,
            items:parsedJson.results
          });
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
        <div>It will work sooon</div>
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

export default MyComponent