import React from 'react';
class UserDetail extends React.Component {

    render() { 
        return ( 
        <div>
            <br></br>
            <li>{this.props.myname} , {this.props.myemail}</li>
        </div> );
    }
}
 
export default UserDetail;