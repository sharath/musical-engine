import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Reader extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
      The Reader component goes here.
    </div>);
  }
}

class BookShelf extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
      The BookShelf component goes here.
    </div>);
  }
}

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        The Login component goes here.
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Login} />
        <Route path="/about" component={BookShelf} />
        <Route path="/topics" component={Reader} />
      </div>
    </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));
