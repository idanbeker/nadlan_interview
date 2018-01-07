import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'

import MenuPage from "./routes/LocationsMenuPage/components/MenuPage.react";
import CityWeatherScreen from "./routes/CityWeatherScreen/components/CityWeatherScreen.react";
import './style/base.css';
import {AppBar, Toolbar,Typography} from "material-ui";

class App extends Component {

  render() {

    return (
      <div id="AppContainer">
          <AppBar position="static" color="default">
              <Toolbar>
                  <Typography type="title" color="inherit">
                      Welcome to Ballaba weather app.
                  </Typography>
              </Toolbar>
          </AppBar>
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
