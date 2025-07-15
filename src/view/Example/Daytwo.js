import React from 'react';

class Daytwo extends React.Component {
    // jsx, fragment, <>
    render() {
        let fullname = 'Bui Nguyen Kinh';
        var age = 'Kinh Nguyen';
        const userName = 'adadada';
        return (
            <div className ='first'>
                <h1>Day 2: React Component {fullname}, {age}, {userName}</h1>
                <p>This is a simple component demonstrating state and event handling in React.</p>
            </div>
            
        );
    }
}

export default Daytwo;
