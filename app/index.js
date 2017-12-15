import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'password',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    var login = (
    	<form action='#' onSubmit={this.authorize}>
        <input type='password' placeholder='Password' />
        <input type='submit' />
      </form>
    );
    var helloWorld = (
    	<div>
        <p>
          React is neat!
        </p>
      </div>
    );
    return (
      <div id="authorization">
        <h1>{this.state.authorized ? 'Hello World.' : 'Enter the Password'}</h1>
        {this.state.authorized ? helloWorld : login}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
