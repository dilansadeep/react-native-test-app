import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import ToggleButton from "./ToggleButton";

export default class Schedule extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.Image}
          source={require("../assets/hero.png")}
        >
          <Image
            style={styles.ImageTwo}
            source={require("../assets/logo.png")}
          />
          <Text style={styles.Text}>Europ Conference App</Text>
          <ToggleButton items={["THURSDAY,FRIDAY"]} value={"THURSDAY"} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Image: {
    height: 200,
    width: null,
    alignItems: "center"
  },
  ImageTwo: {
    marginTop: 40,
    height: 55,
    width: 60,
    marginBottom: 10
  },
  Text: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "white",
    fontWeight: "bold"
  }
});
