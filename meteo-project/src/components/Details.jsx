import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap'

function Details() {
  const [weatherDetails, setWeatherDetails] = useState(null)
  const [forecast, setForecast] = useState([])
  const { cityId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchDetails = () => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=4462e204626d43f88221bf07a55eef25&units=metric&lang=it`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherDetails(data)

          if (data.coord) {
            fetch(
              `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=4462e204626d43f88221bf07a55eef25&units=metric&lang=it`
            )
              .then((response) => response.json())
              .then((forecastData) => {
                setForecast(
                  forecastData.list ? forecastData.list.slice(0, 5) : []
                )
              })
              .catch((error) => {
                console.error('Errore nel caricamento forecast:', error)
              })
          }
        })
        .catch((error) => {
          console.error('Errore nel caricamento dettagli:', error)
        })
    }
    fetchDetails()
  }, [cityId])

  if (!weatherDetails)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '60vh' }}
      >
        <Spinner animation="border" variant="primary" />
      </div>
    )

  return (
    <Container
      className="blue d-flex flex-column align-items-center mb-3"
      style={{ minHeight: '72vh' }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={7} lg={6} xl={5}>
          <Card
            className="mx-auto"
            style={{ marginTop: '2rem', marginBottom: '2rem' }}
          >
            <Card.Body className="text-center">
              <Card.Title className="text-center mb-4">
                {weatherDetails.name}
              </Card.Title>
              <div className="text-center">
                <div className="mb-2 fs-5">
                  Temperatura: {weatherDetails.main.temp}°C
                </div>
                <div className="mb-2 fs-5">
                  Temperatura percepita: {weatherDetails.main.feels_like}°C
                </div>
                <div className="mb-2 fs-5">
                  Temperatura minima: {weatherDetails.main.temp_min}°C
                </div>
                <div className="mb-2 fs-5">
                  Temperatura massima: {weatherDetails.main.temp_max}°C
                </div>
                <div className="mb-2 fs-5">
                  Pressione: {weatherDetails.main.pressure} hPa
                </div>
                <div className="mb-2 fs-5">
                  Umidità: {weatherDetails.main.humidity}%
                </div>
                <div className="mb-2 fs-5">
                  Velocità del vento: {weatherDetails.wind.speed} m/s
                </div>
                <div className="mb-2 fs-5">
                  Condizioni: {weatherDetails.weather[0].description}
                </div>
              </div>
              <Button
                variant="primary"
                className="mt-3 w-100"
                onClick={() => navigate('/')}
              >
                Torna alla home
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {forecast.length > 0 && (
        <Row className="w-100 justify-content-center mt-2">
          <Col md={10}>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {forecast.map((item, idx) => (
                <Card
                  key={idx}
                  style={{ width: '12rem' }}
                  className="text-center"
                >
                  <Card.Body>
                    <Card.Title className="fs-6 mb-2">
                      {new Date(item.dt * 1000).toLocaleString('it-IT', {
                        weekday: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </Card.Title>
                    <Card.Img
                      variant="top"
                      src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                      style={{ width: '50%', margin: '0 auto' }}
                    />
                    <Card.Text className="small mb-2">
                      {item.weather[0].description}
                      <br />
                      Temp: {item.main.temp}°C
                      <br />
                      Umidità: {item.main.humidity}%
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Details
