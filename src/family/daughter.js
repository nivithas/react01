import React from 'react';

class Daughter extends React.Component {
    render() { 
        return ( <div>Am the daughter and my name is {this.props.name}</div> )
    }
}
 
export default Daughter;