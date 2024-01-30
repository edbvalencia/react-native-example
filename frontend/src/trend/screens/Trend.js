import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TrendCard from "../components/TrendCard";
import { BACKEND_URL } from "../../../util/constants";
import axios from "axios";

const RESOURSE_URL = `${BACKEND_URL}/trends`;

export default function Trend() {
  const [heroTrends, setHeroTrends] = useState([]);

  useEffect(() => {
    axios
      .get(RESOURSE_URL, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setHeroTrends(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={heroTrends}
        keyExtractor={(hero) => hero.name}
        renderItem={({ item }) => <TrendCard {...item} />}
        ListHeaderComponent={<Text style={styles.title}>Esta Semana</Text>}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E9EF",
  },
  contentContainerStyle: {
    padding: 15,
    gap: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
});
