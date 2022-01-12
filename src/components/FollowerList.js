import axios from "axios";
import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  state = {
    myFollowers: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Realseal177/followers")
      .then((resp) => {
        this.setState({
          ...this.state,
          myFollowers: resp.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="follower-div">
        {this.state.myFollowers.map((follower) => (
          <Follower
            key={follower.id}
            avatar_url={follower.avatar_url}
            login={follower.login}
          />
        ))}
      </div>
    );
  }
}

export default FollowerList;
