import { Container, Form } from 'react-bootstrap'
import MeteoCard from './MeteoCards'
import { useContext, useState } from 'react'
import { WeatherContext } from './WeatherContext'

function MyMain() {
  const [searchQuery, setSearchQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const { addWeather } = useContext(WeatherContext)

  const handleSearch = (query) => {
    if (query.length >= 2) {
      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=4462e204626d43f88221bf07a55eef25`
      )
        .then((response) => response.json())
        .then((data) => setSuggestions(data))
        .catch((error) => {
          console.error('Errore nella ricerca:', error)
        })
    } else {
      setSuggestions([])
    }
  }

  const handleCitySelect = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.country}&appid=4462e204626d43f88221bf07a55eef25&units=metric&lang=it`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          addWeather(data)
          setSearchQuery('')
          setSuggestions([])
        }
      })
      .catch((error) => {
        console.error('Errore nel caricamento dati:', error)
      })
  }

  return (
    <Container className="blue my-3" style={{ minHeight: '73vh' }}>
      <div className="d-flex justify-content-center my-4">
        <div style={{ width: '400px', maxWidth: '100%' }}>
          <Form.Control
            type="search"
            placeholder="Cerca una città"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              handleSearch(e.target.value)
            }}
            className="mx-auto"
          />
          {suggestions.length > 0 && (
            <div
              className="position-absolute w-100 mt-1 bg-white border rounded shadow-sm"
              style={{ zIndex: 1000 }}
            >
              {suggestions.map((city, index) => (
                <div
                  key={index}
                  className="p-2 hover-bg-light cursor-pointer"
                  onClick={() => handleCitySelect(city)}
                  style={{ cursor: 'pointer' }}
                >
                  {city.name}, {city.country}
                  {city.state && `, ${city.state}`}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <MeteoCard />
    </Container>
  )
}

export default MyMain
