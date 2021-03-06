import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Parent from './family/parent';
import Alphabet from './alphabet/alphabet';
import Counter from './counter/counter';
import Lifecycle from './lifecycle/lifecycle';
import RemoteAPIData from './remote/apiData';
import Parentform from './form/parentForm';

var position = document.getElementById('root');
var position1 = document.getElementById('life');
ReactDOM.render(<div>
    <App></App>
    <hr></hr>
    <Parent nameson="Kit" namedaughter="Kitty">thoom</Parent>
    <hr></hr>
    <Parent nameson="tik" namedaughter="tikky">mathe</Parent>
    <hr></hr>
    <Parent nameson="tok" namedaughter="tokky">oprah</Parent>
    <hr></hr>
    <Alphabet acolor="green" bcolor="yellow">A</Alphabet>
    <Alphabet acolor="pink" bcolor="indigo">B</Alphabet>
    <Alphabet acolor="yellow" bcolor="pink">C</Alphabet>
    <Alphabet acolor="pink" bcolor="blue">D</Alphabet>
    <hr></hr>
    <Counter></Counter>
    <br></br>
    </div>, 
    position);
    ReactDOM.render(
        <div>
            <Lifecycle></Lifecycle>
            <br></br>
        </div>,
        position1
    )
    ReactDOM.render(
        <div>
            <RemoteAPIData></RemoteAPIData>
            <br></br>
            <br></br>
        </div>,
        document.getElementById('remote')
    )

    ReactDOM.render(
        <div>
            <Parentform></Parentform>
        </div>,
        document.getElementById('form')
    )
