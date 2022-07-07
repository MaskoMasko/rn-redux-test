import * as React from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from "react-native";

export function MainScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        backgroundColor: "rgb(46, 49, 49)",
      }}
    >
      <Text style={[{ textAlign: "center" }, styles.greetingText]}>
        Just an app with Star Wars characters...
      </Text>
      <Text style={{ fontSize: 30, color: "white" }} onPress={props.increment}>
        {props.counter}
      </Text>
      <TouchableOpacity
        activeOpacity={0.5}
        // onPress={() => navigation.navigate("Characters")}
        style={[styles.nameSubmitButton, { marginTop: 100 }]}
      >
        <Text style={styles.nameSubmitButtonText}>CHARACTER LIST</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        // onPress={() => navigation.navigate("Favorites")}
        style={styles.nameSubmitButton}
      >
        <Text style={styles.nameSubmitButtonText}>FAVORITE CHARACTER LIST</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nameModal: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  inputField: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "rgba(240, 240, 214, 1)",
  },
  nameSubmitButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "yellow",
    marginTop: 20,
  },
  nameSubmitButtonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
    color: "white",
  },
});
