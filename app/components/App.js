import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import HomeContainer from './HomeContainer';
import ForecastContainer from '../containers/ForecastContainer';
import Details from './Details';

const App = () =>
    <BrowserRouter>
        <div className="main-container">
            <Navbar />
            <Switch>
                <Route exact path="/" component = { HomeContainer } />
                <Route exact path="/forecast" component = { ForecastContainer } />
                <Route exact path="/details/:city" component = { Details } />
                <Route render={ () => <h1>Not Found</h1> } />
            </Switch>
        </div>
    </BrowserRouter>

export default App;
