import styled from "styled-components"

export function Products() {

    const products = [
        { src: "https://dummyimage.com/300x250/000/fff", name: "Projeto de prevenção e combate à incêndio e pânico", description: "Lorem ipsum dolor sit amet constur adipelit sed do eiusmtempor incid dolore magna aliqu enim ad. minim veniam." },
        { src: "https://dummyimage.com/300x250/000/fff", name: "Projetos Elétricos", description: "Lorem ipsum dolor sit amet constur adipelit sed do eiusmtempor incid dolore magna aliqu enim ad. minim veniam." },
        { src: "https://dummyimage.com/300x250/000/fff", name: "Serviços Topográficos", description: "Lorem ipsum dolor sit amet constur adipelit sed do eiusmtempor incid dolore magna aliqu enim ad. minim veniam." },
        { src: "https://dummyimage.com/300x250/000/fff", name: "Projetos Hidrossanitários", description: "Lorem ipsum dolor sit amet constur adipelit sed do eiusmtempor incid dolore magna aliqu enim ad. minim veniam." },
        { src: "https://dummyimage.com/300x250/000/fff", name: "Licenciamento", description: "Lorem ipsum dolor sit amet constur adipelit sed do eiusmtempor incid dolore magna aliqu enim ad. minim veniam." },
        { src: "https://dummyimage.com/300x250/000/fff", name: "Exemplo Serviço", description: "Lorem ipsum dolor sit amet constur adipelit sed do eiusmtempor incid dolore magna aliqu enim ad. minim veniam." },
    ]
    return (
        <>
            <Container>
                <Header>
                    <h2>Serviços</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</h3>
                </Header>
                <Grid>
                    {
                        products.map(product =>
                            <GridItem>
                                <img src={product.src} alt={`${product.name}`} />
                                <header><h4>{product.name}</h4></header>
                                <section>{product.description}</section>
                            </GridItem>
                        )
                    }
                </Grid>
            </Container>
        </>
    )
}

const Container = styled.div`
    padding: 0 10rem;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 768px){
        padding: 0 5rem;
    }

    @media (max-width: 400px){
        padding: 0 1rem;
    }
`
const Header = styled.div`
    & > h3 {
        font-weight: normal;
        color: var(--gray);
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    row-gap: 3rem;
    column-gap: 1rem;
    grid-auto-flow: dense;
    justify-content: space-evenly;
`

const GridItem = styled.article`
    grid-area: span 1 / span 1;
    max-width: 30rem;

    & > img {
        width: 100%;
    }

    & > header {

        & h4 {
            font-weight: normal;
            font-size: 2rem;
        }
    }

    & > section {
        margin-top: 1rem;
        text-align: justify;
        color: var(--gray);
    }
`