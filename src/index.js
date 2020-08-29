import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent 
      handleClick={ e => (e.target.style.color = e.target.style.color ? null : 'red') }
    />
  </div>,
  document.getElementById('root')
);