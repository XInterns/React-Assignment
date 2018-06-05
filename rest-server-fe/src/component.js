import React from 'react'

const component = (props) => (

<div > 
    <form action="localhost:3000/enteruser">
     Name: <input type='text' placeholder='Enter UserName'></input><br></br>
     Password: <input type='text' placeholder='Enter Password'></input><br></br>
      
      <input type='submit' value='submit'></input>

    </form>
</div>
);
//export default component;