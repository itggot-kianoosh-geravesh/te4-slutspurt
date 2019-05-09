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
    let data = {
      msg: this.state.msg
    };
    fetch("/posts/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        window.location.reload();
      })
      .catch(err => console.log(err));
  }
  handleRemove(id) {
    let data = {
      id: id
    };
    fetch("/posts/remove", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        window.location.reload();
      })
      .catch(err => console.log(err));
  }
  render() {
    let { posts } = this.state;
    let { msg } = this.state;
    return (
      <div className="App">
        <h1>POSTS</h1>
        <ul style={{ listStyle: "none" }}>
          {posts.map(post => (
            <li
              style={{
                margin: "20px auto",
                width: "50vw",
                height: "25px",
                border: "1px solid black",
                cursor: "pointer"
              }}
              key={post.id}
              onClick={() => this.handleRemove(post.id)}
            >
              {post.msg}
            </li>
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
