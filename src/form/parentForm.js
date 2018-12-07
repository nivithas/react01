import React from 'react';
import ChildForm from './childForm';
class Parentform extends React.Component {
    state = {  }
    constructor(props){
        super(props)
        this.state = {
            nameValue: ""
        }
        this.captureInput = this.captureInput.bind(this)
        this.saveValue = this.saveValue.bind(this)
    }
    captureInput(e){
        console.log(e.target.value)
        this.setState({
            nameValue: e.target.value
        })
        
    }
    saveValue(){
        alert(this.state.nameValue);
    }
    render() { 
        return ( <div>
            Form:<br></br>
            <input type="text" onChange={this.captureInput}></input>
            <button onClick={this.saveValue}>Save</button>
            <br></br>
            <br></br>
            <ChildForm callHello={this.captureInput}></ChildForm>
        </div> );
    }
}
 
export default Parentform;
