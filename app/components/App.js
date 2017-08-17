var React = require('react');
var Navbar = require('./Navbar');
var HomeContainer = require('./HomeContainer');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="main-container">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component = { HomeContainer } />
                        <Route exact path="/forecast" component = { Forecast } />
                        <Route render={function () {
                            return <h1>Not Found</h1>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App;