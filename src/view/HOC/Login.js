import React from 'react';
import "./login.css";

class Login extends React.Component {
  state ={
    Username: "",
    Password: ""
  }
  handleChangeUsername = (event) => {
    this.setState({
        Username: event.target.value
    })
  };
  handleChangePassword = (event) => {
    this.setState({
        Password: event.target.value
    })
  };
    handleSubmit = (event) => {
        event.preventDefault();
        alert(" click me");
    }
    


    render() {
        return (
            <div className='login-container'>
            <form>
            <label for="Username">Username:</label><br/>
            <input type="text" value={this.state.Username}
             onChange={(event) => this.handleChangeUsername(event)} placeholder="Nhập tên đăng nhập" /><br/>
            <label for="Password">Password:</label><br/>          
            <input type="password" value={this.state.Password}
            onChange={(event)=> this.handleChangePassword(event)} placeholder="Nhập mật khẩu của bạn"/><br/>
            <input type="submit" value="Submit" onClick={(event)=> this.handleSubmit(event)}/>
            
        </form>
        </div>
            
        );
    }
}
export default Login;

