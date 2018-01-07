import React, { Component } from 'react';
import axios from 'axios';
import {OPEN_WEATHER_API_KEY} from "../../../constants/OpenWeatherApi";
import {GET_WEATHER_URL} from "../../../constants/Urls";

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
            let {data:{weather:[weatherDescription],main:weatherData}} = await axios.get(GET_WEATHER_URL + `?appid=${OPEN_WEATHER_API_KEY}&id=${locationId}`)
            this.setState({weatherDescription,weatherData,status:CityWeatherScreen.STATUS_SUCCESS})
        }catch(Error){
            console.error(Error)
            alert('Error fetching data')
            this.setState({status:CityWeatherScreen.STATUS_FAIL})
        }

    }


    render() {
        let {weatherDescription,weatherData} = this.state;

        console.log(weatherData,'WEATHER DATA', weatherDescription, 'WEATHER DESCRIPTIO');


        return (
            <div className="CityWeatherScreen">
                city weather screen
            </div>
        );
    }
}

export default CityWeatherScreen ;

