import { Container, Row, Col, Button } from 'react-bootstrap'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'

function MyFooter() {
  return (
    <footer className="text-white my-2 py-2 text-center">
      <Container className="violet py-3 px-3">
        <Row className="mb-3">
          <Col xs={12} className="px-0 text-center">
            <a href="#" className="text-white mx-2">
              <BsFacebook className="fs-4" />
            </a>
            <a href="#" className="text-white mx-2">
              <BsInstagram className="fs-4" />
            </a>
            <a href="#" className="text-white mx-2">
              <BsTwitter className="fs-4" />
            </a>
            <a href="#" className="text-white mx-2">
              <BsYoutube className="fs-4" />
            </a>
          </Col>
        </Row>
        <Row className="my-4 ">
          <Col xs={12} className="text-center">
            <Button
              variant="outline-light"
              size="sm"
              className="rounded-0 px-4"
            >
              Service Code
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <p className="text-white small mb-0">&copy; 2025 EpicMeteo, Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default MyFooter
