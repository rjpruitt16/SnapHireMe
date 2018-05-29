
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';

const root = document.getElementById('root');

ReactDOM.render(<BrowserRouter>
                  <App/>
                </BrowserRouter>, root);
