import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import StateProvider from './shared/components/StateProvider';

ReactDOM.render((<StateProvider><App /></StateProvider>), document.getElementById('root'));
