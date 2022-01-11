import React from 'react';

class User extends React.Component {
  render() {
    console.log('User has fired');
    return(<div>
      <img src='https://avatars.githubusercontent.com/u/90492724?v=4' />
      <h3>*User Name(underlined in styling)*</h3>
      <p>Location: </p>
      <h4>TOTAL REPOS:</h4>
      <h4>TOTAL FOLLOWERS:</h4>
    </div>);
  }
}

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
  }

  render() {
    return(<div>
      <h1>GITHUB INFO</h1>

      <form>
        <h2>GitHub Handle</h2>
        <input type='text' placeholder='Search'/>
        <button>Search People</button>
      </form>

      <User />

      <h2>FOLLOWERS:</h2>

      <div>
        <img src='https://avatars.githubusercontent.com/u/38574400?v=4' />
        <p>*follower name*</p>
      </div>

    </div>);
  }
}

export default App;
