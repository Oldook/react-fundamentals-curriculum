var React = require('react');
var CityForm = require('./CityForm');

class HomeContainer extends React.Component {
    render () {
        return (
            <div className="home-container" style={{backgroundImage: 'url(app/images/pattern.svg)'}}>
                <h1 className="header">Enter a City and State</h1>
                <CityForm flexDirection="column" />
            </div>
        )
    }
}

module.exports = HomeContainer;
