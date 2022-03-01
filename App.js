import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  StatusBar,
  Dimensions,
  FlatList,
} from "react-native";
import CardShops from "./components/CardShop/CardShops";
import patika from "./patika.json";

export default function App() {
  const renderCard = ({ item }) => <CardShops shops={item} />;

  return (
    <SafeAreaView style={styles.main_container}>
      <StatusBar />
      <Text style={styles.header}>PATIKASTORE</Text>
      <TextInput style={styles.search_shops} placeholder="Ara..." />
      <FlatList numColumns={2} data={patika} renderItem={renderCard}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main_container: {
    marginLeft: 10,
    paddingBottom: 100,
  },

  search_shops: {
    backgroundColor: "#ebeff2",
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.07,
    fontSize: 18,
    borderRadius: 10,
    color: "gray",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 12,
  },

  header: {
    marginLeft: 10,
    color: "#820080",
    fontSize: 22,
    marginTop: 4,
    marginLeft: 5,
    fontWeight: "bold",
  },
});
