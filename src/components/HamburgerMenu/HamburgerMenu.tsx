import { useContext } from "react";
import NavigationMenuContext from "../../context/NavigationMenuProvider";
import { navigationListItems } from "../Header/NavigationBar";
import styled, { css } from "styled-components";


interface HamburgerMenuProp {
    isActive?: boolean;
    onClick?: () => void;
}

export function HamburgerMenu() {

    const isMenuOpened = useContext(NavigationMenuContext)?.isMenuOpened;
    const setIsMenuOpened = useContext(NavigationMenuContext)?.setIsMenuOpened;

    return (
        <>
            <HamburgerButton
                isActive={isMenuOpened}
                onClick={() => setIsMenuOpened && setIsMenuOpened(!isMenuOpened)}
            >
                <div>
                    <div />
                    <div />
                    <div />
                </div>
            </HamburgerButton>
            <Container
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
            </Container>
        </>
    )
}

const Container = styled.section<HamburgerMenuProp>`
  position: absolute;
  z-index: 999;
  top: 0;
  right: -100%;
  width: 30rem;
  height: 100vh;
  padding: 6rem 0;

  background-color: var(--dark-blue);

  transition: right 0.3s;

  ${({ isActive }) =>
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

const HamburgerButton = styled.button<HamburgerMenuProp>`
    position: absolute;
    z-index: 1000;
    position: absolute;
    top: 1rem;
    right: 1rem;
        
    background-color: transparent;
    border: none;

    & > div {
        width: 3.6rem;
        height: 3rem;
        border: 0.1rem solid var(--black);
        border-radius: 0.4rem;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 4px;

        transition: border 0.3s;

        & > div {
            width: 2.2rem;
            height: 2px;
            background-color: var(--black);
            border-radius: 1rem;

            transition: background-color 0.3s, transform 0.3s;
            // transform-origin: 20% 50%;
        }
        
        & > div:nth-child(2){
            transform-origin: 50% 50%;
        }
    }

    ${({ isActive }) =>
        isActive &&
        css`
            & > div {
                border: 0.1rem solid var(--white);    
                
                & > div {
                    background-color: var(--white);
                }

                & > div:nth-child(1){
                    transform: translateY(0.6rem) rotate(45deg);
                }

                & > div:nth-child(2){
                    transform: rotateY(90deg);
                }
                
                & > div:nth-child(3){
                    transform: translateY(-0.6rem) rotate(-45deg);
                }
            }
          
        `
    }

    @media (min-width: 769px) {
        display: none;
    }
`