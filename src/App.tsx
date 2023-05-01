import styled, {css} from "styled-components"
import { HeaderContainer } from "./components/Header/HeaderComponent"
import { navigationListItems } from "./components/Header/NavigationBar"
import { useContext } from "react";
import NavigationMenuContext from "./context/NavigationMenuProvider";

interface HamburgerMenuProp {
  isActive?: boolean;
  onClick?: () => void;
}

function App() {

  const isMenuOpened = useContext(NavigationMenuContext)?.isMenuOpened;


  return (
    <>
      <Container>
        <HeaderContainer />
        <h1>Hello world!</h1>
      </Container>

      <HamburgerMenu
        isActive={isMenuOpened}
      >
        <HList>
          {
            navigationListItems.map((item, index) =>
              <HListItem
                key={index}
              >
                {item.name}
              </HListItem>
            )
          }
        </HList>
      </HamburgerMenu>


    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const HamburgerMenu = styled.section<HamburgerMenuProp>`
  position: fixed;
  top: 0;
  right: -100%;
  width: 30rem;
  height: 100vh;
  padding: 6rem 0;

  background-color: var(--dark-blue);

  transition: right 0.3s;

  ${
    ({isActive}) =>
    isActive &&
    css`
      right: 0;
    `
  }
`

const HList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  gap: 2rem;
`
const HListItem = styled.li`
  font-size: 2.6rem;
  font-weight: bold;
  color: var(--white);
`

export default App
