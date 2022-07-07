import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Provider } from "react-redux";
import { CharacterDetailScreen } from "./screens/CharacterDetailsScreen";
import { CharactersScreen } from "./screens/CharactersScreen";
import CounterScreen from "./screens/CounterScreen";
import { FavoritesScreen } from "./screens/FavoritesScreen";
import { store } from "./services/store";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={CounterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Characters"
            component={CharactersScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CharacterDeatils"
            component={CharacterDetailScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
