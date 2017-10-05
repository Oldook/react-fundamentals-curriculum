import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import HomeContainer from './HomeContainer';
import Forecast from './Forecast';
import Details from './Details';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main-container">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component = { HomeContainer } />
                        <Route exact path="/forecast" component = { Forecast } />
                        <Route exact path="/details/:city" component = { Details } />
                        <Route render={function () {
                            return <h1>Not Found</h1>
                        }} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;