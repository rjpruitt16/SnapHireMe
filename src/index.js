
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import ErrorBoundary from './ErrorBoundary'
import PostService from "./PostService"

const root = document.getElementById('root');

ReactDOM.render(<BrowserRouter>
                  <ErrorBoundary message="Error in Post Request file">
                    <App auth={PostService}/>
                  </ErrorBoundary>
                </BrowserRouter>, root);
