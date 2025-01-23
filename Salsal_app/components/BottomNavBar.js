import React from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { colors, typography } from "../styles/theme"

export default function BottomNavBar() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab} onPress={() => console.log("Navigate to Create Event")}>
        <Text style={styles.tabText}>Create Event</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => console.log("Navigate to Contacts")}>
        <Text style={styles.tabText}>Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Events")}>
        <Text style={styles.tabText}>Events</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    paddingBottom: 20, // Add extra padding for devices with home indicator
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  tabText: {
    ...typography.body,
    color: colors.white,
    fontSize: 14,
  },
})

