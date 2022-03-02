import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Alert,
  // Switch,
} from "react-native";

export default function App() {
  // const [toggle, setToogle] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  // const handleToggle = () => {
  //   setToogle((prev) => !prev);
  // };

  const handleSubmit = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
      Alert.alert("INVALID EMAIL ADDRESS");
    }
    if (password.length > 6) {
      setValidPassword(true);
    } else {
      setValidPassword(false);
      Alert.alert("INVALID PASSWORD");
    }
    if (reg.test(email) && password.length > 6) {
      Alert.alert("You logged in successfully!");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Form</Text>
        <TextInput
          style={validEmail ? styles.validInput : styles.invalidInput}
          placeholder="Your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={validPassword ? styles.validInput : styles.invalidInput}
          placeholder="Your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
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
  validInput: {
    marginTop: 10,
    borderWidth: 1,
    width: 200,
    padding: 5,
    borderRadius: 5,
    borderColor: "lightgrey",
  },
  invalidInput: {
    marginTop: 10,
    borderWidth: 1,
    width: 200,
    padding: 5,
    borderRadius: 5,
    borderColor: "red",
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
