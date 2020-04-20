import React from "react";
import { createStackNavigator } from "react-navigation-stack";

import Campings from "../screens/Campings";
import Settings from "../screens/Settings";
import Home from "../screens/Home";

export default createStackNavigator({
  Campings: Campings,
  Settings: Settings,
  Home : Home,
});
