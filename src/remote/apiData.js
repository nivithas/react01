import React from 'react'
import axios from 'axios'
import UserDetail from './userDetail';

class RemoteAPIData extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users: []
        }
    }
    getRemoteData(){
        axios.get("http://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            this.setState({
                users:response.data
            })
            // console.log(response.data)
            console.log(this.state.users)
        })
    }

    renderUserDetail(){
        return this.state.users.map((user)=>{
            return (<UserDetail key={user.id} myname={user.name} myemail={user.email}></UserDetail>)
        })
    }
    
    componentWillMount(){
        this.getRemoteData()
    }

    render() { 
        return ( 
            <div>
                {this.renderUserDetail()}
            </div>
         );
    }
}
 
export default RemoteAPIData;