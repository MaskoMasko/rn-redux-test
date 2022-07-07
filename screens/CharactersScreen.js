import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export const CharactersScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.charItemContainer}>
      {[].map((char, idx) => {
        const { name, id } = char;
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CharacterDetails");
            }}
            key={id}
            style={styles.charListItem}
            activeOpacity={0.5}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.charListItemText}>{name}</Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  navigation.navigate("Favorites");
                }}
                style={{
                  padding: 10,
                  backgroundColor: "black",
                  borderRadius: 5,
                  margin: 5,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  FAVORITE
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  charItemContainer: {
    width: "100%",
    backgroundColor: "rgb(46, 49, 49)",
  },
  charListItem: {
    marginHorizontal: "3%",
    width: "94%",
    height: 50,
    backgroundColor: "yellow",
    margin: 15,
    borderRadius: 10,
    justifyContent: "center",
  },
  charListItemText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
