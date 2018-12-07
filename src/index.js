import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Parent from './family/parent';

var position = document.getElementById('root');
ReactDOM.render(<div>
    <App></App>
    <hr></hr>
    <Parent nameson="Kit" namedaughter="Kitty">thoom</Parent>
    <hr></hr>
    <Parent nameson="tik" namedaughter="tikky">mathe</Parent>
    <hr></hr>
    <Parent nameson="tok" namedaughter="tokky">oprah</Parent>
    </div>, 
    position);

