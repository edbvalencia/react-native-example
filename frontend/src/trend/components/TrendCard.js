import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";

function TrendCard({
  name,
  image,
  winrate_init,
  winrate_current,
  winrate_difference,
}) {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image
        source={{ uri: `https://es.dotabuff.com/${image}` }}
        style={styles.heroImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.heroName}>{name}</Text>
        <Text>Winrate Inicial: {winrate_init}%</Text>
        <Text>Winrate Actual: {winrate_current}%</Text>
        <Text>Diferencia de Winrate: {winrate_difference}%</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  heroImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    objectFit: "cover",
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  heroName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default TrendCard;
