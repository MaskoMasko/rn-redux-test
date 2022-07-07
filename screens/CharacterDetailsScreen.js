import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export const CharacterDetailScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingLeft: 10,
        backgroundColor: "rgb(46, 49, 49)",
      }}
    >
      <Text style={styles.characterName}>name</Text>
      <Text style={styles.characterPodnaslovi}>Personal</Text>
      <Text style={styles.characterDrugo}>Gender: </Text>
      <Text style={styles.characterDrugo}>Brith Year:</Text>
      <Text style={styles.characterPodnaslovi}>Movies</Text>
      <View>
        {[].map((filmic, i) => {
          return (
            <Text key={i} style={styles.characterDrugo}>
              {filmic.title}
            </Text>
          );
        })}
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.goBack();
          }}
          style={[
            styles.addToFavBtn,
            {
              marginHorizontal: 10,
              marginVertical: 20,
            },
          ]}
        >
          <Text style={styles.addToFavBtnText}>GO BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("Favorites");
          }}
          style={[
            styles.addToFavBtn,
            {
              backgroundColor: "yellow",
              marginHorizontal: 10,
              marginVertical: 20,
            },
          ]}
        >
          <Text
            style={[
              styles.addToFavBtnText,
              {
                color: "black",
                fontWeight: "bold",
              },
            ]}
          >
            ADD TO FAVORITES
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  characterName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  characterPodnaslovi: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  characterDrugo: {
    fontSize: 20,
    color: "white",
  },
  addToFavBtn: {
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
  },
  addToFavBtnText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
});
