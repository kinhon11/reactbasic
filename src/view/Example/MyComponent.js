import React from 'react';
import Childcomponent from './Childcomponent';

class MyComponent extends React.Component {
    state = { 
        // name : "React",
        // channel : "Kinh Nguyen",
        firstname:'',
        lastname:''
     };
    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     });}
    //     handleClickButton = () =>{
    //         alert('Click me')
    //     }
    handleChangeFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        });
    }
    handleChangeLastName = (event) => {
        this.setState({
            Lastname: event.target.value
        });
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        alert('Click me');


    }
    render() {
       
        return (
        <>
       {/* <div className="first">
            <input value={this.state.name} type="text"
            onChange={(event) => this.handleOnChangeName(event)}
            />
            HELLO MyComponent, {this.state['name']}
        </div>
        <div className="second">
            My channel, {this.state.channel}
        </div>
        <div className="third">
            <button onClick={() => this.handleClickButton}>
                Click me           
            </button>
        </div> */}
        <form>
            <label for="fname">First name:</label><br/>
            <input type="text" value={this.state.firstname}
             Onchange={(event) => this.handleChangeFirstName(event)}/><br/>
            <label for="lname">Last name:</label><br/>          
            <input type="text" value={this.state.lastname}
            Onchange={(event)=> this.handleChangeLastName(event)}/><br/>
            <input type="submit" value="Submit"
            onClick={(event)=> this.handleSubmit}/>
        </form>
        <Childcomponent />
        </>
        );
    }
}
export default MyComponent;
// export nhieeuf casi dung {}