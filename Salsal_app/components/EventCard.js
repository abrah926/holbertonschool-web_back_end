import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import { colors, typography } from "../styles/theme"

export default function EventCard({ event }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => console.log("Navigate to event details")}>
      <Image source={{ uri: event.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.location}>{event.location}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  content: {
    padding: 15,
  },
  title: {
    ...typography.header,
    fontSize: 20,
    marginBottom: 5,
  },
  date: {
    ...typography.body,
    color: colors.secondary,
    marginBottom: 5,
  },
  location: {
    ...typography.body,
    color: colors.text,
  },
})

