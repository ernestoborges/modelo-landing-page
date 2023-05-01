import styled from "styled-components"
import { HeaderContainer } from "./components/Header/HeaderComponent"
import { HomeSection } from "./components/Home/HomeSection";
import { AboutSection } from "./components/About/AboutSection";
import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu";


function App() {



  return (
    <>
      <Container>
        <HeaderContainer />
        <HamburgerMenu />
        <Section>
          <HomeSection />
        </Section>
        <Section>
          <AboutSection />
        </Section>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Section = styled.section`
  position: relative;
  top: 6rem;
`

export default App
