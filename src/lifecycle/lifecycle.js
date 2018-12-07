import React from 'react';
import ReactDOM from 'react-dom';

class Lifecycle extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            dummyVariable: 0
        }
        this.changeState = this.changeState.bind(this)
    }
    changeState(){
        this.setState({
            dummyVariable: this.state.dummyVariable + 1
        })
        if(this.state.dummyVariable > 10){
            ReactDOM.unmountComponentAtNode(document.getElementById("life"))
        }
    }
    componentWillMount(){
        console.log("component will mount now")
        console.log(this.state.dummyVariable)
        this.setState({
            dummyVariable:this.state.dummyVariable +1
        })
    }
    componentDidMount(){
        console.log("component mounted")
        console.log(this.state.dummyVariable)
    }
    componentWillUpdate(){
        console.log("component will update")
    }
    componentDidUpdate(){
        console.log("component got updated")
    }
    componentWillUnmount(){
        console.log("component will be unmounted")
    }
    render() { 
        return ( 
            <div>Exploring the lifecycle !!!<br></br>
            <button onClick={this.changeState}>Change State {this.state.dummyVariable}</button>
            </div>
            
         );
    }
}
 
export default Lifecycle;