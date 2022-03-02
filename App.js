import React from "react";
// import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Switch,
} from "react-native";

export default function App() {
  // const [toggle, setToogle] = useState(false);

  // const handleToggle = () => {
  //   setToogle((prev) => !prev);
  // };

  const handleSubmit = () => {
    console.log("Submit");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Form</Text>
        <TextInput style={styles.input} placeholder="Your email" />
        <TextInput
          style={styles.input}
          placeholder="Your password"
          secureTextEntry
        />
        {/* <Switch value={toggle} onValueChange={handleToggle} /> */}
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    marginTop: 10,
    borderWidth: 1,
    width: 200,
    padding: 5,
    borderRadius: 5,
    borderColor: "lightgrey",
  },
  btn: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
  },
});
