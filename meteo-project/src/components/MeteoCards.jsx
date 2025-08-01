import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function MeteoCard() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchWeather()
  }, [])

  const fetchWeather = () => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=Firenze,IT&appid=4462e204626d43f88221bf07a55eef25&units=metric&lang=it'
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Errore nel caricamento dati:', error)
        setLoading(false)
      })
  }

  if (loading) return <div>Caricamento...</div>
  if (!weather) return <div>Nessun dato meteo disponibile</div>

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
      />
      <Card.Body>
        <Card.Title>{weather.name}</Card.Title>
        <Card.Text>
          Temperatura: {weather.main.temp}°C
          <br />
          Condizioni: {weather.weather[0].description}
          <br />
          Umidità: {weather.main.humidity}%
        </Card.Text>
        <Button variant="primary" onClick={fetchWeather}>
          Aggiorna
        </Button>
      </Card.Body>
    </Card>
  )
}

export default MeteoCard
