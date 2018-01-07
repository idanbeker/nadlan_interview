import React, {Component} from 'react';
import {SupportedCities} from "../../../constants/SupportedCities";


class MenuPage extends Component {

    constructor(props){
        super(props);

        this.redirectToWeatherPage = this.redirectToWeatherPage.bind(this);
    }

    redirectToWeatherPage(locationId){
        let {history} = this.props;

        history.push(`/weather-display/${locationId}`);

    }


    render() {

        const CityMenuItem = ({cityName, handleClick}) =>
            <div className="CityMenuItem" onClick={handleClick}>
                {cityName}
            </div>;


        return (
            <div className="MenuPage">
                {SupportedCities.map(({cityName, id}, idx) =>
                    <CityMenuItem key={idx} cityName={cityName} handleClick={()=>{this.redirectToWeatherPage(id)}}/>
                )}
            </div>
        );
    }
}

export default MenuPage;

