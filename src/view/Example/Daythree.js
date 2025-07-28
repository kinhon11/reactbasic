import React from 'react';

class Daythree extends React.Component {
  state = {
    Name: 'Kính',
    Channel: 'aaaaaaaaa'
  }

  handleOnChangeName = (event) => {
    this.setState({
      Name: event.target.value
    });
  }

  handleOnchangeChannel = () => {
    this.setState({
      Channel: this.state.Name
    });
  }

  render() {
    return (
      <>
        <div className="first">
          <input 
            value={this.state.Name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)} 
          />
          HELLO MyComponent, {this.state.Name}
        </div>
        <div className="second">
          My channel, {this.state.Channel}
        </div>
        <div className="third">
          <button onClick={this.handleOnchangeChannel}>
            Click me
          </button>
        </div>
      </>
    );
  }
}

export default Daythree;
