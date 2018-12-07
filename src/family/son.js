import React from 'react';

class Son extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                Am the son and my name is {this.props.name}
            </div>
         );
    }
}
 
export default Son;