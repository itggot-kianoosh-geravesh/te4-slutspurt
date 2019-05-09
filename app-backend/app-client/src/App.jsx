import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    posts: [],
    msg: ""
  };
  componentDidMount() {
    fetch("/posts")
      .then(res => res.json())
      .catch(err => console.log(err))
      .then(posts => this.setState({ posts }));
  }
  handleChange(event) {
    this.setState({ msg: event.target.value });
  }
  handleSubmit() {
    console.log(this.state.msg);
  }
  render() {
    let { posts } = this.state;
    let { msg } = this.state;
    return (
      <div className="App">
        <h1>POSTS</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.msg}</li>
          ))}
        </ul>
        <input
          type="text"
          value={msg}
          onChange={this.handleChange.bind(this)}
        />
        <input
          type="submit"
          value="Submit"
          onClick={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default App;
