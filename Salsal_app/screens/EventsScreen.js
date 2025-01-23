import React, { useState, useEffect } from "react"
import { View, StyleSheet } from "react-native"
import Swiper from "react-native-deck-swiper"
import EventCard from "../components/EventCard"
import CollapsibleCalendar from "../components/CollapsibleCalendar"
import { fetchEvents } from "../utils/api"
import { colors } from "../styles/theme"

export default function EventsScreen() {
  const [events, setEvents] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date())

  useEffect(() => {
    loadEvents()
  }, [selectedDate])

  const loadEvents = async () => {
    const fetchedEvents = await fetchEvents(selectedDate)
    setEvents(fetchedEvents)
  }

  return (
    <View style={styles.container}>
      <CollapsibleCalendar onDateSelect={setSelectedDate} />
      <Swiper
        cards={events}
        renderCard={(event) => <EventCard event={event} />}
        onSwipedAll={() => console.log("All cards have been swiped")}
        cardIndex={0}
        backgroundColor={colors.background}
        stackSize={3}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
})

