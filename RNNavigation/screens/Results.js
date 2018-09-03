import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export class Result extends Component {
  render() {
    return (
      <View>
        <Text>This is the Results screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("HomeScreen")}
          title="Home"
        />
      </View>
    );
  }
}

export default Result;
