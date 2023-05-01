import styled from "styled-components"

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

export function NavigationBar() {
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