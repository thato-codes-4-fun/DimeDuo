import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import data from "@/assets/data/dummy";

const summaryData = data.summaryData;

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back User</Text>
      <View style={styles.card}>
        <Text className="text-white">{summaryData.netBalance}</Text>
      </View>
      <View style={styles.transactionsContainer}>
        <Text style={styles.title}> Transactions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  card: {
    backgroundColor: "blue",
    width: "100%",
    height: "35%",
    borderRadius: 20,
    marginTop: 20,
  },
  transactionsContainer: {
    marginTop: 20,
  },
});
