import React from 'react';

class Login extends React.Component{

  constructor(props){
    super(props);
  };

  render(){ 
    return(
      <form className="loginForm" name='loginForm'>
        <input
          ref={(ip)=> this.email= ip}
          className="usernameInput"
          placeholder="email..."
          onChange={this.props.handleChange}
          name='email' 
        />
        <input
          ref={(ip)=> this.password= ip}
          className="passwordInput"
          placeholder="password..."
          onChange={this.props.handleChange}
          name='password' 

        />

        <button onClick={this.props.handleSubmit}>
          Submit
        </button>
      </form>
    )
  }
}

export default Login;