
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import AuthService from "./AuthService"

const root = document.getElementById('root');

ReactDOM.render(<BrowserRouter>
                  <App Auth={AuthService} />
                </BrowserRouter>, root);
