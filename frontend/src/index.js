
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import PostService from "./PostService"

const root = document.getElementById('root');

ReactDOM.render(<BrowserRouter>
                  <App auth={PostService}/>
                </BrowserRouter>, root);
