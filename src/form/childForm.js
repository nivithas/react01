import React from 'react';

class ChildForm extends React.Component {
    state = {  }
    render() { 
        return ( <div>
            Child form:<br></br>
            <input type="text" onChange={this.props.callHello}></input>
        </div>  );
    }
}
 
export default ChildForm;