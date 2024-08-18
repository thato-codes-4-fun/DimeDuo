import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import data from "@/assets/data/dummy";
import { FlatList } from "react-native";

const summaryData = data.summaryData;
const transactions = data.recentTransactions;

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back User</Text>
      <View className="p-8 bg-blue-400" style={styles.card}>
        <Text className="text-white  text-bold text-lg">
          Net Balance: R{summaryData.netBalance}
        </Text>
        <Text className="text-white  text-bold text-lg">
          Current Balance: R{summaryData.remainingBudget}
        </Text>
        <Text className="text-white  text-bold text-lg">
          Total Expenses: R{summaryData.totalExpenses}
        </Text>
        <Text className="text-white  text-bold text-lg">
          Savings Progress: {summaryData.savingsProgress}%
        </Text>
      </View>
      <View style={styles.transactionsContainer}>
        <Text style={styles.title}>Savings Overview</Text>
      </View>
      <View style={styles.transactionsContainer}>
        <Text style={styles.title}> Transactions</Text>
        <FlatList
          data={transactions}
          renderItem={({ item }) => <Text>{item.amount}</Text>}
        />
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
  card: {
    width: "100%",
    height: "35%",
    borderRadius: 20,
    marginTop: 20,
  },
  transactionsContainer: {
    marginTop: 20,
  },
});
