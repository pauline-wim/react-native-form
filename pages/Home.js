import { StyleSheet, SafeAreaView, Text } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HOME</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
  },
});
