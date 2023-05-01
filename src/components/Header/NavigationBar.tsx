import styled, { css } from "styled-components"
import NavigationMenuContext from "../../context/NavigationMenuProvider"
import { useContext } from "react";

export const navigationListItems = [
    {
        name: "Inicio"
    },
    {
        name: "Quem Somos"
    },
    {
        name: "Serviços"
    },
    {
        name: "Blog"
    },
    {
        name: "Contato"
    },
]

interface HamburgerMenuProp {
    isActive?: boolean;
    onClick?: () => void;
}

export function NavigationBar() {
    const isMenuOpened = useContext(NavigationMenuContext)?.isMenuOpened;
    const setIsMenuOpened = useContext(NavigationMenuContext)?.setIsMenuOpened;

    return (
        <>
            <NavBar>
                <NavList>
                    {
                        navigationListItems.map((item, index) =>
                            <NavItem
                                key={index}
                            >
                                {item.name}
                            </NavItem>
                        )
                    }
                </NavList>
            </NavBar>
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
        </>
    )
}

const NavBar = styled.nav`
    @media (max-width: 768px) {
        display: none;
    }
`
const NavList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
`

const NavItem = styled.li`
    cursor: pointer;
`

const HamburgerButton = styled.button<HamburgerMenuProp>`

    position: relative;
    z-index: 999;
        
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