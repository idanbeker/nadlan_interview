import React, { Component } from 'react';
import {SupportedCities} from "../../../constants/SupportedCities";


class MenuPage extends Component {

    render() {

        const CityMenuItem = ({cityName})=>
            <div className="CityMenuItem">
                {cityName}
            </div>;

        return (
            <div className="MenuPage">
                {SupportedCities.map(({cityName},idx)=>
                    <CityMenuItem cityName={cityName} />
                )}
            </div>
        );
    }
}

export default MenuPage;

