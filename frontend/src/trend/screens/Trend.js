import { FlatList, StyleSheet, Text, View } from "react-native";
import TrendCard from "../components/TrendCard";

const heroTrends = [
  {
    id: 1,
    name: "Anti-Mage",
    image: "https://example.com/antimage.jpg",
    winrate_init: 45.5,
    winrate_current: 48.2,
    winrate_difference: 2.7,
  },
  {
    id: 2,
    name: "Crystal Maiden",
    image:
      "https://es.dotabuff.com/assets/heroes/leshrac-0e02d57f25369afe326662cd778be53d43e31b6abdf9f5bce088549092641959.jpg",
    winrate_init: 40.2,
    winrate_current: 42.8,
    winrate_difference: 2.6,
  },
  {
    id: 3,
    name: "Drow Ranger",
    image: "https://example.com/drowranger.jpg",
    winrate_init: 50.5,
    winrate_current: 48.2,
    winrate_difference: 2.3,
  },
  {
    id: 4,
    name: "Earthshaker",
    image: "https://example.com/earthshaker.jpg",
    winrate_init: 45.5,
    winrate_current: 48.2,
    winrate_difference: 2.7,
  },
  {
    id: 5,
    name: "Juggernaut",
    image: "https://example.com/juggernaut.jpg",
    winrate_init: 45.5,
    winrate_current: 48.2,
    winrate_difference: 2.7,
  },
  {
    id: 6,
    name: "Mirana",
    image: "https://example.com/mirana.jpg",
    winrate_init: 45.5,
    winrate_current: 48.2,
    winrate_difference: 2.7,
  },
];

export default function Trend() {
  return (
    <View style={styles.container}>
      <FlatList
        data={heroTrends}
        keyExtractor={(hero) => hero.id.toString()}
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
