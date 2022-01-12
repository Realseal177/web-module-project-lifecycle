import React from "react";

class Follower extends React.Component {
  render() {
    return (
      <div className='follower-card'>
        <img width="300px" src={this.props.avatar_url} />
        <p>{this.props.login}</p>
      </div>
    );
  }
}

export default Follower;
