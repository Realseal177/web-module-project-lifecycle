import React from 'react';

class User extends React.Component {
    render() {
      console.log('User has fired');
      return(<div>
        <img src={this.props.gitImage} />
        <h3>{this.props.name}</h3>
        <p>Location: {this.props.location}</p>
        <h4>TOTAL REPOS: {this.props.repos}</h4>
        <h4>TOTAL FOLLOWERS: {this.props.followers}</h4>
      </div>);
    }
  }

  export default User;