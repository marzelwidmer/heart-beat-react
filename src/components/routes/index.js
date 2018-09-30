import React from "react";
import { StyleSheet } from "react-native";
import { Router, Scene } from "react-native-router-flux";

import Home from "../home";
import About from "../about";

const Routes = () => (
  <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
    <Scene key="root">
      <Scene
        key="home"
        component={Home}
        title="Home"
        initial={true}
        leftButtonIconStyle={styles.backButton}
      />
      <Scene
        key="about"
        backTitle="Zrug"
        // backButtonTextStyle={styles.navBack}
        // navBarButtonColor="#FF3B30"
        // backButtonTintColor="#FF3B30"
        component={About}
        title="About"
      />
    </Scene>
  </Router>
);
export default Routes;

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#0D0D0D" // changing navbar color
  },
  navTitle: {
    color: "#EEEEEE" // changing navbar title color
  },
  navBack: {
    color: "#FF3B30" // changing navbar title color
  }
});
