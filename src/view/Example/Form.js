import React from "react";
import axios from "axios";
import ListUser from "../Users/ListUser";


class Form extends React.Component 
{
    state ={
        Firstname: "",
        Lastname: "",
        users: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users');
        this.setState({
            users: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleChangeFirstname = (event) =>{
        this.setState({
            Firstname: event.target.value
        });
    }
    handleChangeLastName = (event) =>{
        this.setState({
            Lastname: event.target.value
        });
    }

    render() {
    const { users } = this.state;
        return (
            <div>
            <form>
            <label for="fname">First name:</label><br/>
            <input type="text" value={this.state.Firstname}
             onchange={(event) => this.handleChangeFirstName(event)}/><br/>
            <label for="lname">Last name:</label><br/>          
            <input type="text" value={this.state.Lastname}
            onchange={(event)=> this.handleChangeLastName(event)}/><br/>
            </form>
            <h3> Danh sachj nguoi dung lay tu api</h3>
            <ul>
                {users && users.length > 0 && users.map((item, index) => {
                    return (
                        <li key={item.id}>
                                {index + 1} - {item.first_name} {item.last_name}   
                            </li>
                           )}
                )}
            </ul>
            </div>
            
        );
    }
    
}
export default Form;