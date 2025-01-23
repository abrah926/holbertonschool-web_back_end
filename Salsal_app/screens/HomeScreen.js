import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { colors, typography } from "../styles/theme"

export default function HomeScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salsa en San Juan</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Events")}>
        <Text style={styles.buttonText}>Ver Eventos</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  title: {
    ...typography.header,
    fontSize: 32,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    ...typography.body,
    color: colors.white,
    fontSize: 18,
  },
})

