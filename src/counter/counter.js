import React from 'react';
class Counter extends React.Component {
    state = {  }
    constructor(props){
        super(props)
        this.state ={
            counterValue:0
        }
        this.addCounter = this.addCounter.bind(this);
    }
    addCounter(){
        this.setState({counterValue: this.state.counterValue + 1})
    }
    render() { 
        return ( 
            <div>
                <h2>Counter</h2>
                <button onClick={this.addCounter}>Click Me</button>
                <br></br>
                <br></br>
                I am clicked {this.state.counterValue} times!!!
            </div>
         );
    }
}
 
export default Counter;