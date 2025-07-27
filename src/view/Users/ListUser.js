import React from 'react';
import axios from 'axios';
import './ListUser.scss';
class ListUser extends React.Component {
    state ={
        ListUser: []
    }


    async componnentDidMount() {
        // axios.get('https://reqres.in/api/users')
        // .then(res =>{
        //     console.log('>> check res:', res.data.data)
        // })
        let res = await axios.get('https://reqres.in/api/users');
        this.setState({
            ListUser: res && res.data && res.data.data ? res.data.data : []

        })
        console.log('>> check res:', res.data.data);

    }

render() {
    const { ListUser } = this.state;
    return(
        <div className="list-user-container">
            <div className="title">
                Fetch all list user from API
            </div>
            <div className="list-user-content">
                {ListUser && ListUser.length > 0 &&
                    ListUser.map((item, index) => {
                        return(
                            <div className='Child' key={item.id}>
                                {index + 1} - {item.first_name} {item.last_name}   
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

}
export default ListUser;