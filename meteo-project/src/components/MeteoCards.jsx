import { useContext } from 'react'
import { WeatherContext } from './WeatherContext'
import Card from 'react-bootstrap/Card'
import { Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { BsTrash } from 'react-icons/bs'

function MeteoCard() {
  const { weatherData, removeWeather } = useContext(WeatherContext)
  const navigate = useNavigate()

  return (
    <Row className="g-3">
      {weatherData.map((weather) => (
        <Col key={weather.id} xs={12} sm={6} md={4} lg={3} xl={2.4}>
          <Card
            style={{ width: '100%', position: 'relative', cursor: 'pointer' }}
            className="meteo-card-hover"
            onClick={() => navigate(`/details/${weather.id}`)}
          >
            <BsTrash
              className="text-white position-absolute top-0 end-0 rounded fs-6 mt-1 me-1"
              style={{
                cursor: 'pointer',
                backgroundColor: '#dc3545',
                width: '30px',
                height: '30px',
                padding: '7px',
              }}
              onClick={(e) => {
                e.stopPropagation()
                removeWeather(weather.id)
              }}
            />
            <Card.Img
              variant="top"
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              style={{ width: '50%', margin: '0 auto' }}
            />
            <Card.Body className="p-2 text-center">
              <Card.Title className="fs-5 mb-2">{weather.name}</Card.Title>
              <Card.Text className="small mb-2">
                Temperatura: {weather.main.temp}°C
                <br />
                Condizioni: {weather.weather[0].description}
                <br />
                Umidità: {weather.main.humidity}%
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default MeteoCard
