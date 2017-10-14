import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import './styles/styles.scss';


var app = ReactDOM.render(<AppRouter />, document.getElementById('app'))