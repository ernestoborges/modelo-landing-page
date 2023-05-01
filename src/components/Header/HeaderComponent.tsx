import styled from "styled-components"
import { NavigationBar } from "./NavigationBar"

export function HeaderContainer() {
    return (
        <>
            <Header>
                <Logo>
                    <img src="" alt="" />
                    <LogoText>
                        <span>modelo</span>
                        <span>engenharia</span>
                    </LogoText>
                </Logo>
                <NavigationBar />
            </Header>
        </>
    )
}

const Header = styled.header`
    font-size: 1.6rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;

    min-height: 6rem;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const LogoText = styled.p`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;

    & > span {
        line-height: 1.5rem;
    }

    & > span:first-child {
        text-transform: uppercase;
        font-weight: bold;
    }

    & > span:last-child {
        font-size: 1.2rem;
        letter-spacing: 0.6rem;
        font-weight: light;
    }

`