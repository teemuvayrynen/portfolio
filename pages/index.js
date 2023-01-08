import styled from 'styled-components';
import Landing from '../components/landing/Landing';
import Menu from '../components/menu/Menu';
import Portfolio from '../components/portfolio/Portfolio';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import SlideMenu from '../components/menu/SlideMenu';

const App = () => {


  return (
    <>
      <Container>
        <Menu />
        <SlideMenu />
        <Landing />
        <About />
        <Portfolio />
        <Contact />
      </Container>
    </>
  )
}

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export default App