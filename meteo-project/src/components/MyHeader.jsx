import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyHeader() {
  return (
    <>
      <Container fluid className=" sky py-3 text-black">
        <Navbar expand="lg" className="p-0">
          <Container fluid className="p-0">
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="mx-3 w-100 justify-content-center">
                <Nav.Item className="pe-4">
                  <Link to="/" className="nav-link text-white">
                    Home
                  </Link>
                </Nav.Item>
                <NavDropdown
                  title={<span className="text-white">Previsioni</span>}
                  id="nav-dropdown-1"
                >
                  <NavDropdown.Item className="text-dark">
                    Oggi
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-dark">
                    Domani
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-dark">
                    Tutta la settimana
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={<span className="text-white">Regioni</span>}
                  id="nav-dropdown-2"
                >
                  <NavDropdown.Item className="text-dark">
                    Nord
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-dark">
                    Centro
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-dark">Sud</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={<span className="text-white">News</span>}
                  id="nav-dropdown-3"
                >
                  <NavDropdown.Item className="text-dark">
                    Mobilità
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-dark">
                    Viaggi
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-dark">
                    Salute
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={<span className="text-white">Info</span>}
                  id="nav-dropdown-4"
                >
                  <NavDropdown.Item className="text-dark">
                    Contatti
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-dark">
                    Termini di servizio
                  </NavDropdown.Item>
                  <NavDropdown.Item className="text-dark">
                    Lavora con noi
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  )
}

export default MyHeader
