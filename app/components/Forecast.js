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
        this.ifLoading = this.props.ifLoading;
        this.getCity = this.props.getCity;
        this.setLoading = this.props.setLoading;
    } 

    componentDidMount() {
        const city = queryString.parse(this.props.location.search).city;

        this.setLoading();
        this.requestForecast(city);
    }

    // componentWillReceiveProps(nextProps) {
    //     const city = queryString.parse(nextProps.location.search).city;
    //
    //     // this.requestForecast(city);
    // }

    render () {
        console.log(this.ifLoading());
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
