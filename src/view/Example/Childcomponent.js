import React from 'react';

class Childcomponent extends React.Component {
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
        <div> CHild Component</div>
       
        </>
        );
    }
}
export default Childcomponent;
// export nhieeuf casi dung {}