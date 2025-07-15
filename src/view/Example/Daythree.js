import React from 'react';

class Daythree extends React.Component{
    state = {
        Name:'Kính',
        Channel:'aaaaaaaaa'
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        });}
        handleClickButton = () =>{
            alert('Click me')
        }
    // là 1 mảng
    render() {
        return(
        <>
         <div className="first">
            <input value={this.state.Name} type="text"
            onChange={(event) => this.handleOnChangeName(event)}
            />
            HELLO MyComponent, {this.state['name']}
        </div>
        <div className="second">
            My channel, {this.state.Channel}
        </div>
        <div className="third">
            <button onClick={() => this.handleClickButton}>
                Click me           
            </button>
        </div>
        </>
        )
    }
}
export default Daythree;
