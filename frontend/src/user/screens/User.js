import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const twitter = <Icon name={"twitter"} size={30} color={"black"} />;
const facebook = <Icon name={"facebook"} size={30} color={"black"} />;
const instagram = <Icon name={"instagram"} size={30} color={"black"} />;
const linkedin = <Icon name={"pinterest"} size={30} color={"black"} />;
const tiktok = <Icon name={"github"} size={30} color={"black"} />;

const user = {
  avatar: "https://avatars.githubusercontent.com/u/127812245?v=4",
  coverPhoto:
    "https://media.licdn.com/dms/image/D4E16AQHPO-tH1neSYw/profile-displaybackgroundimage-shrink_350_1400/0/1695031951597?e=1712188800&v=beta&t=az4BbKr1ZFHG6xvDwAW8DyMapan-a_bcaet61wIJcZc",
  name: "Eduardo Valencia",
  location: "Ciudad de México, México",
  description:
    "Programador apasionado por la tecnología y el desarrollo de software.",
};

export default function UserProfile() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user.coverPhoto }}
        style={styles.coverPhoto}
        resizeMode="cover"
      />
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: user.avatar }}
          style={styles.avatar}
          resizeMode="cover"
        />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.location}>{user.location}</Text>
        <Text style={styles.description}>{user.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL("https://facebook.com/")}
        >
          {facebook}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL("https://twitter.com/")}
        >
          {twitter}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL("https://instagram.com/")}
        >
          {instagram}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL("https://linkedin.com/")}
        >
          {linkedin}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => Linking.openURL("https://tiktok.com/")}
        >
          {tiktok}
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverPhoto: {
    width: "100%",
    height: 200,
  },
  profileContainer: {
    marginTop: -75,
    alignItems: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "white",
  },
  name: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
  location: {
    marginTop: 5,
    fontSize: 16,
    color: "#555",
  },
  description: {
    marginHorizontal: 20,
    textAlign: "center",
    marginTop: 15,
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
    width: "60%",
    justifyContent: "space-between",
  },
});
