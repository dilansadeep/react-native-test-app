import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class ToggleButton extends React.Component {
  renderItem = item => {
    render(
      <View>
        <Text>{item}</Text>
      </View>
    );
  };

  render() {
    const { items, value } = this.props;
    return <View style={styles.container}>{items.map(this.renderItem)}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
});
