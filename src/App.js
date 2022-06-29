import { React, Component } from 'react';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    //state to store data
    this.state = {
      users:[]
    };
  }

  componentWillMount(){
    axios('https://api.randomuser.me/?nat=US&results=5')
      .then(response => console.log(response))
  }

  render(){
    return (
      <div>
        hello!!!
      </div>
    );
  }
}

export default App;
