import { Container, Form } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function MyHeader() {
  return (
    <>
      <Container className="text-center mt-2">
        <h1>Epic Meteo</h1>
      </Container>
      <Container className="mt-3 pink py-3 text-black">
        <Nav variant="pills" className="mx-3">
          <NavDropdown title="Previsioni" id="nav-dropdown-1">
            <NavDropdown.Item>Oggi</NavDropdown.Item>
            <NavDropdown.Item>Domani</NavDropdown.Item>
            <NavDropdown.Item>Tutta la settimana</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Regioni" id="nav-dropdown-2">
            <NavDropdown.Item>Nord</NavDropdown.Item>
            <NavDropdown.Item>Centro</NavDropdown.Item>
            <NavDropdown.Item>Sud</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="News" id="nav-dropdown-3">
            <NavDropdown.Item>Mobilità</NavDropdown.Item>
            <NavDropdown.Item>Viaggi</NavDropdown.Item>
            <NavDropdown.Item>Salute</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Info" id="nav-dropdown-4">
            <NavDropdown.Item>Contatti</NavDropdown.Item>
            <NavDropdown.Item>Termini di servizio</NavDropdown.Item>
            <NavDropdown.Item>Lavora con noi</NavDropdown.Item>
          </NavDropdown>
          <div className="ms-auto">
            <Form.Control
              type="search"
              placeholder="Cerca..."
              className="ms-3"
              style={{ width: '400px' }}
            />
          </div>
        </Nav>
      </Container>
    </>
  )
}

export default MyHeader
