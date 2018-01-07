import React, { Component } from 'react';
import axios from 'axios';
import {OPEN_WEATHER_API_KEY} from "../../../constants/OpenWeatherApi";
import {GET_WEATHER_URL} from "../../../constants/Urls";
import Spinner from 'react-spinkit';

class CityWeatherScreen extends Component {

    static STATUS_LOADING = 'loading';
    static STATUS_FAIL = 'fail';
    static STATUS_SUCCESS = 'success';

    constructor(props){
        super(props);

        this.state = {
            status: CityWeatherScreen.STATUS_LOADING
        }
    }

    async componentDidMount(){
        let {match:{params:{locationId}}} = this.props;
        console.log('LOCATION ID',locationId)


        try{
            let {data:{weather:[weatherDescription],main:weatherData,name:cityName}} = await axios.get(GET_WEATHER_URL + `?appid=${OPEN_WEATHER_API_KEY}&id=${locationId}&units=metric`)
            this.setState({weatherDescription,weatherData,status:CityWeatherScreen.STATUS_SUCCESS,cityName})
        }catch(Error){
            console.error(Error)
            alert('Error fetching data')
            this.setState({status:CityWeatherScreen.STATUS_FAIL})
        }

    }


    render() {
        let {weatherDescription,weatherData,cityName,status} = this.state;

        console.log(weatherData,'WEATHER DATA', weatherDescription, 'WEATHER DESCRIPTIO');


        return (
            <div id="WeatherDisplay">
                {status === CityWeatherScreen.STATUS_LOADING && <Spinner name="three-bounce" />}
                {status === CityWeatherScreen.STATUS_SUCCESS &&
                <div className="WeatherDataContainer">
                    <div className="Title">Weather report for {cityName} </div>
                    <img className="Icon" src={`http://openweathermap.org/img/w/${weatherDescription.icon}.png` }/>
                    <div className="Degrees">{weatherData.temp} &#x2103;</div>
                    <hr/>
                    <div className="Description">Description: {weatherDescription.description}</div>
                    <div className="Description">Pressure: {weatherData.pressure}</div>
                    <div className="Description">Humidity: {weatherData.humidity}</div>
                </div>
                }
            </div>
        );
    }
}

export default CityWeatherScreen ;

