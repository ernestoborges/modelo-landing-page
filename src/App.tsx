import styled from "styled-components"
import { HeaderContainer } from "./components/Header/HeaderComponent"
import { HomeSection } from "./components/Sections/Home/HomeSection";
import { AboutSection } from "./components/Sections/About/AboutSection";
import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu";
import { Products } from "./components/Sections/Products/Products";
import { Contact } from "./components/Sections/Contact/Contact";
import { News } from "./components/Sections/News/News";

function App() {

  return (
    <>
      <Container>
        <HeaderContainer className="menu" />
        <HamburgerMenu />
        <Section id="home">
          <HomeSection />
        </Section>
        <Section id="about">
          <AboutSection />
        </Section>
        <Section id="products">
          <Products />
        </Section>
        <Section id="news">
          <News />
        </Section>
        <Section id="contact">
          <Contact />
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
  scroll-margin-top: 6rem;
`

export default App
