import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Admin from './Admin';
import App from './App';

export default()=>(

    <BrowserRouter>
        <Route path="/"exact component={App}/>
        <Route path="/Admin"exact component={Admin}/>
    </BrowserRouter>
);