import React, { useState } from "react"
import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { Calendar } from "react-native-calendars"
import { colors, typography } from "../styles/theme"

export default function CollapsibleCalendar({ onDateSelect }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header} onPress={() => setIsExpanded(!isExpanded)}>
        <Text style={styles.headerText}>{isExpanded ? "Hide Calendar" : "Show Calendar"}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <Calendar
          onDayPress={(day) => {
            onDateSelect(new Date(day.dateString))
            setIsExpanded(false)
          }}
          theme={{
            backgroundColor: colors.background,
            calendarBackground: colors.background,
            textSectionTitleColor: colors.primary,
            selectedDayBackgroundColor: colors.primary,
            selectedDayTextColor: colors.white,
            todayTextColor: colors.secondary,
            dayTextColor: colors.text,
            textDisabledColor: colors.disabled,
          }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    alignItems: "center",
  },
  headerText: {
    ...typography.body,
    color: colors.white,
    fontSize: 16,
  },
})

