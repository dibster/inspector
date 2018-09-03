import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import Result from "./screens/Results";
import Home from "./screens/Home";
import Scan from "./screens/Scan";

const AppNavigator = StackNavigator({
  HomeScreen: { screen: Home },
  ScanScreen: { screen: Scan },
  ResultScreen: { screen: Result }
});

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
