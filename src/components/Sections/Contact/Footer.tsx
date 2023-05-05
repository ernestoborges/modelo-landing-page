import styled from "styled-components"

export function Footer(){
    return(
        <>
            <Container>
                Footer
            </Container>
        </>
    )
}

const Container = styled.div`
    color: var(--white);

    padding: 0 10rem;

    @media (max-width: 768px){
        padding: 0 5rem;
    }

    @media (max-width: 400px){
        padding: 0 1rem;
    }
`