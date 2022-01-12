import React from "react";
import axios from "axios";
import './index.css';

import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    name: "",
    userName: "",
    gitImage: [],
    location: "",
    repos: "",
    followers: "",
    url: "",
    searcher: '',
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/realseal177")
      .then((resp) => {
        this.setState({
          ...this.state,
          name: resp.data.name,
          gitImage: resp.data.avatar_url,
          location: resp.data.location,
          repos: resp.data.public_repos,
          followers: resp.data.followers,
          userName: resp.data.login,
          url: resp.data.html_url,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      searcher: e.target.value,
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
    const search = this.state.searcher;
    axios.get(`https://api.github.com/users/${this.state.searcher}`)
      .then(resp => {
        console.log(resp.data);
        this.setState({
          ...this.state,
          name: resp.data.name,
          gitImage: resp.data.avatar_url,
          location: resp.data.location,
          repos: resp.data.public_repos,
          followers: resp.data.followers,
          userName: resp.data.login,
          url: resp.data.html_url,
        });
      }).catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Search" onChange={this.handleChange}/>
          <button onClick={this.handleSearch}>Search GitHubbers</button>
        </form>

        <h1>GITHUB INFO</h1>
        <a href={this.state.url} target="_blank">
          <h2>{this.state.userName}</h2>
        </a>

        <User
          gitImage={this.state.gitImage}
          name={this.state.name}
          location={this.state.location}
          repos={this.state.repos}
          followers={this.state.followers}
        />

        <h2>FOLLOWERS:</h2>

        <FollowerList />
      </div>
    );
  }
}

export default App;
