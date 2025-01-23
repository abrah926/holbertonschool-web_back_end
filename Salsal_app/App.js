import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import HomeScreen from "./screens/HomeScreen"
import EventsScreen from "./screens/EventsScreen"
import BottomNavBar from "./components/BottomNavBar"

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Events" component={EventsScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
        <BottomNavBar />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

