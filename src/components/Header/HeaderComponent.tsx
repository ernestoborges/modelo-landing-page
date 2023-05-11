import styled from "styled-components"
import { NavigationBar } from "./NavigationBar"

export function HeaderContainer({ className }: { className: string }) {
    return (
        <>
            <Header className={className}>
                <Wrapper>

                    <Logo>
                        <img src="" alt="" />
                        <LogoText>
                            <span>modelo</span>
                            <span>engenharia</span>
                        </LogoText>
                    </Logo>
                    <NavigationBar />
                </Wrapper>
            </Header>
        </>
    )
}

const Header = styled.header`

    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;

`

const Wrapper = styled.div`
    background-color: var(--white);
    font-size: 1.6rem;
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
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