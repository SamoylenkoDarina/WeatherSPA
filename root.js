import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './containers/main/main';
import Details from './containers/details/details';
import './styles/main.scss'

const Root = () => (
    <Router>
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/details/:id" component={Details} />
        </div>
    </Router>
)

export default Root;