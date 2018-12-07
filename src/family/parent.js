import React from 'react';
import Daughter from './daughter';
import Son from './son';

class Parent extends React.Component{

    render(){
        return(
            <div>Am the Parent and our family is <b>{this.props.children}</b>
                <Daughter name={this.props.namedaughter}></Daughter>
                <Son name={this.props.nameson}></Son>
            </div>
        )
    }
}

export default Parent