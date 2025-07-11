import React from 'react';

class MyComponent extends React.Component {
    state = { name : "React", channel : "Kinh Nguyen" };
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        });}
    render() {
       
        return (
        <>
        <div className="first">
            <input value={this.state.name} type="text"
            onChange={(event) => this.handleOnChangeName(event)}
            />
            HELLO MyComponent, {this.state['name']}
        </div>
        <div className="second">
            My channel, {this.state.channel}
        </div>
        </>
        );
    }
}
export default MyComponent;
// export nhieeuf casi dung {}