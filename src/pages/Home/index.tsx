import Header from '../../components/Cabecalho'
import Hero from '../../components/Hero'
import ListaVagas from '../../containers/ListaVagas'
import { Container } from '../../styles'

const Home = () => (
  <>
    <Header />
    <Hero />
    <Container>
      <ListaVagas />
    </Container>
  </>
)

export default Home
