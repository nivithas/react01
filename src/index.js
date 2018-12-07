import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Parent from './family/parent';

var position = document.getElementById('root');
ReactDOM.render(<div>
    <App></App>
    <hr></hr>
    <Parent></Parent>
    </div>, 
    position);

