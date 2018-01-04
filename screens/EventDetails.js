import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class EventDetails extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Conference Keynote</Text>
          <Text style={styles.subtitle}>Thursday,May 18, 10-10:45</Text>
          <Text style={styles.details}>
            Hear about some stuff has happend and some other thinfs that peaple
            think dout and want to talk about for some weird reason to a lot of
            other peaple
          </Text>
        </View>

        <View style={styles.speakerContainer}>
          <Image
            style={styles.image}
            source={{ uri: "http://via.placeholder.com/50x50" }}
          />
          <View>
            <Text style={styles.speakerBio}>Lucy Vatne</Text>
            <Text>The best doggo</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  detailsContainer: {
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 4
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 10
  },
  details: {
    fontSize: 13,
    marginBottom: 10
  },
  speakerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row"
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 25
  },

  speakerBio: {
    fontSize: 14,
    color: "red"
  }
});
