import React, {Component} from 'react';
import {SupportedCities} from "../../../constants/SupportedCities";
import {GridList} from "material-ui";


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

        const CityMenuItem = ({cityName, handleClick,img}) =>
            <div className="CityMenuItem" onClick={handleClick}>
                <div className="Title">{cityName}</div>
                <div className="ImageContainer" style={{backgroundImage:`url(${img})`}}/>

            </div>;


        return (
            <div id="CitiesMenuPage">
                {SupportedCities.map(({cityName, id,img}, idx) =>
                    <CityMenuItem key={idx} cityName={cityName} img={img} handleClick={()=>{this.redirectToWeatherPage(id)}}/>
                )}

            </div>
        );
    }
}

export default MenuPage;

