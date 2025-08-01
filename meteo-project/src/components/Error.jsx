import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Error() {
  const navigate = useNavigate()

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6}>
          <div className="text-center">
            <h1 className="display-4 mb-4 text-danger">404</h1>
            <h2 className="mb-3">Pagina non trovata</h2>
            <p className="mb-4">L'indirizzo che hai inserito non esiste o non è valido.</p>
            <Button variant="primary" onClick={() => navigate('/')}>
              Torna alla home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Error
