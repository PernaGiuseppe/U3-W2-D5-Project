import { Container } from 'react-bootstrap'
import MeteoCard from './MeteoCards'

function MyMain() {
  return (
    <Container className="blue mt-3 py-4" style={{ minHeight: '50vh' }}>
      <MeteoCard />
    </Container>
  )
}

export default MyMain
