import { createContext, useState, useEffect } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([])

  useEffect(() => {
    const initialCities = [
      'Roma',
      'Napoli',
      'Milano',
      'San Cataldo',
      'Firenze',
      'Torino',
      'Modena',
      'Palermo',
    ]

    const fetchInitialData = () => {
      const promises = initialCities.map((city) =>
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},IT&appid=4462e204626d43f88221bf07a55eef25&units=metric&lang=it`
        )
          .then((res) => res.json())
          .catch(() => null)
      )

      Promise.all(promises)
        .then((results) => {
          const validResults = results.filter(
            (data) => data && data.cod === 200
          )
          setWeatherData(validResults)
        })
        .catch((error) => {
          console.error('Errore nel caricamento iniziale:', error)
        })
    }

    fetchInitialData()
  }, [])

  const addWeather = (data) => {
    setWeatherData((prev) => {
      const exists = prev.some((w) => w.id === data.id)
      if (!exists) {
        return [...prev, data]
      }
      return prev
    })
  }

  const removeWeather = (id) => {
    setWeatherData((prev) => prev.filter((w) => w.id !== id))
  }

  return (
    <WeatherContext.Provider value={{ weatherData, addWeather, removeWeather }}>
      {children}
    </WeatherContext.Provider>
  )
}
