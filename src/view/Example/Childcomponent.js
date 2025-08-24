import React from "react";

class Childcomponent extends React.Component {
  state = {
    // name : "React",
    // channel : "Kinh Nguyen",
    firstname: "",
    lastname: "",
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
      firstname: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      Lastname: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert("Click me");
  };
  render() {
    // let name = this.props.name;
    // let age = this.props.age;
    let { arrJobs } = this.props; // Destructuring props

    return (
      <>
        <div className="job-list">
          {arrJobs.map((item, index) => {
            return (
              <div key={item.id}>
                <h2>
                  {item.name} - {item.salary}
                </h2>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Childcomponent;
// export nhieeuf casi dung {}
