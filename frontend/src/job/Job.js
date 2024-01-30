import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import axios from "axios";
import { BACKEND_URL } from "../../util/constants";
import { Ionicons } from "@expo/vector-icons";

const RESOURCE_URL = `${BACKEND_URL}/jobs`;

export default function Job() {
  const [jobUrl, setJobUrl] = useState("");
  const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.post(
        `${RESOURCE_URL}?job_url=${encodeURIComponent(jobUrl)}`,
        ""
      );
      const json = response.data;
      console.log("Response:", json);
      setResponseData(json);
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {responseData && (
          <View style={styles.responseContainer}>
            <Text style={styles.responseText}>
              {responseData.replace(/[\n\r]/g, "")}
            </Text>
          </View>
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setJobUrl(text)}
          value={jobUrl}
          placeholder="URL Oferta Linkedin"
        />
        <TouchableOpacity style={styles.button} onPress={fetchData}>
          <Ionicons name="arrow-up-circle" size={48} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    height: 60,
    backgroundColor: "white",
    paddingHorizontal: 8,
    borderRadius: 100,
    fontSize: 16,
    paddingLeft: 24,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
  },
  responseContainer: {
    marginTop: 20,
  },
  responseText: {
    marginTop: 10,
    whiteSpace: "pre-line",
    fontSize: 16,
  },
});
