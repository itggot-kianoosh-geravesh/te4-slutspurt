import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    fetch("/users")
      .then(res => res.json())
      .catch(err => console.log(err))
      .then(users => this.setState({ users }));
  }
  render() {
    let { users } = this.state;
    return (
      <div className="App">
        <h1>USERS</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
