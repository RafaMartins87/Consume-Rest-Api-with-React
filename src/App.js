import { React, Component } from 'react';
import axios from 'axios';
import Loading from './Loading';

class App extends Component{
  constructor(props){
    super(props);
    //state to store data
    this.state = {
      users:[],
      loading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.getUser();
    console.log('more users loaded...');
  }

  getUser(){
    this.setState({
      loading: true
    })
    axios('https://api.randomuser.me/?nat=US&results=15')
      .then(response => this.setState({
        users: [...this.state.users, ...response.data.results],
        loading: false
      }))

  }

  componentWillMount(){
    this.getUser();
  }

  render(){
    return (
      <div className='App'>
        {!this.state.loading ? 
          this.state.users.map(user => (
            <div> 
              <h3>{user.name.first} </h3>
              <p>{user.email}</p>
              <hr/>
              <form onSubmit={this.handleSubmit}>
                <input type="submit" value="get user"/>
              </form>
            </div>
            )) : <Loading message="hey hey hey"/>}
      </div>
    );
  }
}

export default App;
