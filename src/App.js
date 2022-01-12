import React from 'react';
import axios from 'axios';

import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    name: '',
    userName: '',
    gitImage: [],
    location: '',
    repos: '',
    followers: '',
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/realseal177')
      .then(resp => {
        this.setState({
          ...this.state,
          name: resp.data.name,
          gitImage: resp.data.avatar_url,
          location: resp.data.location,
          repos: resp.data.public_repos,
          followers: resp.data.followers,
          userName: resp.data.login,
        })
      }).catch(err => {
        console.error(err)
      })
  }

  render() {
    return(<div>
      <h1>GITHUB INFO</h1>

      <form>
        <h2>{this.state.userName}</h2>
        <input type='text' placeholder='Search'/>
        <button>Search People</button>
      </form>

      <User gitImage={this.state.gitImage} name={this.state.name} location={this.state.location} repos={this.state.repos} followers={this.state.followers}/>

      <h2>FOLLOWERS:</h2>

      <FollowerList />

    </div>);
  }
}

export default App;
