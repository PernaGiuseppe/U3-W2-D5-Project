import { useState } from 'react'
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'

function Segnalazioni() {
  const [form, setForm] = useState({
    nome: '',
    cognome: '',
    motivo: '',
    messaggio: '',
  })

  const inputchange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const formSubmit = (e) => {
    e.preventDefault()
    alert('Segnalazione inviata! Grazie per il feedback.')
    setForm({ nome: '', cognome: '', motivo: '', messaggio: '' })
  }

  return (
    <Container
      className="blue d-flex justify-content-center align-items-center"
      style={{ minHeight: '84vh' }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={7} lg={6} xl={5}>
          <Card
            className="mx-auto"
            style={{ marginTop: '2rem', marginBottom: '2rem' }}
          >
            <Card.Body className="text-center">
              <Card.Title className="text-center mb-4">
                Compila il form con le infomazioni richieste
              </Card.Title>
              <Form onSubmit={formSubmit} className="text-start">
                <Form.Group className="mb-3" controlId="formNome">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={inputchange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCognome">
                  <Form.Label>Cognome</Form.Label>
                  <Form.Control
                    type="text"
                    name="cognome"
                    value={form.cognome}
                    onChange={inputchange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMotivo">
                  <Form.Label>Motivo del contatto</Form.Label>
                  <Form.Select
                    name="motivo"
                    value={form.motivo}
                    onChange={inputchange}
                    required
                  >
                    <option value="">Seleziona un motivo</option>
                    <option value="Richiesta informazioni">
                      Richiesta informazioni
                    </option>
                    <option value="Problema generico">Problema generico</option>
                    <option value="Previsioni non precise">
                      Previsioni non precise
                    </option>
                    <option value="Iscrizione alla newsletter">
                      Iscrizione alla newsletter
                    </option>
                    <option value="Problemi con il sito">Lavora con noi</option>
                    <option value="Altro">Altro</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formMessaggio">
                  <Form.Label>Messaggio</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="messaggio"
                    value={form.messaggio}
                    onChange={inputchange}
                    required
                  />
                </Form.Group>
                <div className="text-center">
                  <Button variant="primary" type="submit" className="w-100">
                    Invia form
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Segnalazioni
