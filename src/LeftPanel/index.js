import React, { Component } from 'react';
import './styles.css';

class LeftPanel extends Component {
  render() {
    return (
      <div className="LeftPanel">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" />
          Remember me
        </label>
      </div>
    )
  }
}

export default LeftPanel;
