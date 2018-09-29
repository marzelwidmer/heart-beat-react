import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
 
import { Actions } from "react-native-router-flux";

const About = () => {
  const goToHome = () => {
    Actions.home();
  };
  toggleSwitch1 = value => {
    this.setState({ switch1Value: value });
    console.log("Switch 1 is: " + value);
  };
  toggleSwitch2 = value => {
    this.setState({ switch2Value: value });
    console.log("Switch 2 is: " + value);
  };
  return (
    <View>
      <TouchableOpacity style={{ margin: 128 }} onPress={goToHome}>
        <Text>This is ABOUT</Text>
      </TouchableOpacity>
    

    </View>
  );
};
export default About;
