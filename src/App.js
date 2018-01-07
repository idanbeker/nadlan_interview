import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'


import './App.css';
import MenuPage from "./routes/LocationsMenuPage/components/MenuPage.react";
import CityWeatherScreen from "./routes/CityWeatherScreen/components/CityWeatherScreen.react";

class App extends Component {

  render() {

    return (
      <div className="WeatherApp">
          TODO: top menu.
          <HashRouter>
              <Switch>
                  <Route path="/" exact component={MenuPage}/>
                  <Route path="/weather-display/:locationId" component={CityWeatherScreen}/>
              </Switch>
          </HashRouter>
      </div>
    );
  }
}

export default App;
