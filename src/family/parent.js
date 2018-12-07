import React from 'react';
import Daughter from './daughter';

class Parent extends React.Component{

    render(){
        return(
            <div>Am the Parent
                <hr></hr>
                <Daughter></Daughter>
            </div>
        )
    }
}

export default Parent