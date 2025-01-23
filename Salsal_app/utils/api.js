// This is a mock API file. In a real application, you would make actual API calls here.

const mockEvents = [
  {
    id: 1,
    title: "Salsa Night at La Placita",
    date: "2023-06-15",
    location: "La Placita de Santurce",
    image: "https://example.com/salsa-night.jpg",
  },
  {
    id: 2,
    title: "Bachata Workshop",
    date: "2023-06-17",
    location: "Dance Studio PR",
    image: "https://example.com/bachata-workshop.jpg",
  },
  // Add more mock events here
]

export const fetchEvents = async (date) => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Filter events based on the selected date
  return mockEvents.filter((event) => event.date === date.toISOString().split("T")[0])
}

