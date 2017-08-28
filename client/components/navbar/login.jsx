import React from 'react';

class Login extends React.Component{

  constructor(props){
    super(props);
  };

  render(){ 
    return(
      <form className="loginForm" name='loginForm'>
        <input
          ref={(ip)=> this.username= ip}
          className="usernameInput"
          placeholder="username..."
          onChange={this.props.handleChange}
        />
        <input
          ref={(ip)=> this.password= ip}
          className="passwordInput"
          placeholder="password..."
          onChange={this.props.handleChange}
        />
      </form>
    )
  }
}

export default Login;