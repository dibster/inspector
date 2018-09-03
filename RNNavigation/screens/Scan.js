import React, { Component } from "react";
import { View, Text, Button } from "react-native";

export class Scan extends Component {
  render() {
    return (
      <View>
        <Text>This is the Scan. screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("ResultScreen")}
          title="Result"
        />
      </View>
    );
  }
}

export default Scan;
