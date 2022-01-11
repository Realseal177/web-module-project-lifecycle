import React from 'react';
import axios from 'axios';

import User from './components/User';

class App extends React.Component {
  state = {
    name: '',
    gitImage: [],
    location: '',
    repos: '',
    followers: '',
  }

  componentDidMount() {
    console.log('componentDidMount() has fired');
    axios.get('https://api.github.com/users/realseal177')
      .then(resp => {
        console.log(resp.data);
        this.setState({
          ...this.state,
          name: resp.data.name,
          gitImage: resp.data.avatar_url,
          location: resp.data.location,
          repos: resp.data.public_repos,
          followers: resp.data.followers,
        })
      }).catch(err => {
        console.error(err)
      }).finally(console.log("It's working!!! It's wooorrrking!!!"))
  }

  render() {
    console.log('App is rendering');
    return(<div>
      <h1>GITHUB INFO</h1>

      <form>
        <h2>GitHub Handle</h2>
        <input type='text' placeholder='Search'/>
        <button>Search People</button>
      </form>

      <User gitImage={this.state.gitImage} name={this.state.name} location={this.state.location} repos={this.state.repos} followers={this.state.followers}/>

      <h2>FOLLOWERS:</h2>

      <div>
        <img src='https://avatars.githubusercontent.com/u/38574400?v=4' />
        <p>*follower name*</p>
      </div>

    </div>);
  }
}

export default App;
