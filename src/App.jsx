import NavBar from './components/Navbar.tsx';
import styled from 'styled-components';
import cawfee from './assets/cawfee.gif';

const AppContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #262626;
  background-position: top 3rem center;
  background-image: radial-gradient(50% 50% at top center, rgba(0, 0, 0, .66), #262626), linear-gradient(180deg, #fff, #262626);
`;

const Container = styled.div`
  display: flex;
  height: auto;
  width: 100vw;
`;

const Image = styled.img`
  height: auto;
  width: 100px;
`;

function App() {

  return (
    <AppContainer>
      <NavBar></NavBar>
      <Container>
        <Image src={cawfee}/>
      </Container>
    </AppContainer>
  )
}

export default App
