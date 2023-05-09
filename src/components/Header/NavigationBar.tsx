import styled from "styled-components"

export const navigationListItems = [
    {
        name: "Inicio",
        link: "home"
    },
    {
        name: "Quem Somos",
        link: "about"
    },
    {
        name: "Serviços",
        link: "products"
    },
    {
        name: "Blog",
        link: "news"
    },
    {
        name: "Instagram",
        link: "instagram"
    },
    {
        name: "Contato",
        link: "contact"
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
                                <a href={`#${item.link}`}>
                                    {item.name}
                                </a>
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

    & > a {
        all: unset;
    }
`