import React from 'react';
import Loading  from './Loading';
import Day from './Day';
import queryString from 'query-string';
import api from '../utils/api';

class Forecast extends React.Component {
    constructor(props) {
        super(props);

        this.getForecast = this.props.getForecast;
        this.requestForecast = this.props.requestForecast;
        this.getState = this.props.getState;
        this.getCity = this.props.getCity;
        this.setLoading = this.props.setLoading;
        this.setCity = this.props.setCity;
    }

    // componentWillMount() {
    //     console.log('will mount');
    //     this.setLoading();
    //     console.log(this.ifLoading());
    // }
    //
    // componentDidMount() {
    //     const city = queryString.parse(this.props.location.search).city;
    //
    //     this.requestForecast(city);
    // }
    //
    componentWillReceiveProps(nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            const city = queryString.parse(nextProps.location.search).city;

            this.setCity(city);
        }
    }

    render () {
        // console.log('render');
        // console.log(this.getForecast());
        console.log('forecast state');
        console.log(this.getState());
        return <Loading />
        // return this.ifLoading() ?
        //     <Loading />
        //     :
        //     <div>
        //         <h1 className="forecast-header">{this.getCity()}</h1>
        //         <div className="forecast-container">
        //             {
        //                 this.getForecast().list.map((item, i) =>
        //                     <Day key = {i} forecast = {item} city = {getCity()}/>
        //                 )
        //             }
        //         </div>
        //     </div>
    }
}

export default Forecast;
