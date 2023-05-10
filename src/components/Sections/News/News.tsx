import styled from "styled-components"
import { DesktopNewsDesign } from "./DesktopNewsDesign"
import { MobileNewsDesign } from "./MobileNewsDesign"
import { useEffect, useState } from "react";

export const news = [
    {
        img: "https://dummyimage.com/600x400/000/fff",
        title: "Lectus tristique lacinia non in diam mauris.",
        date: new Date(2023, 4, 3),
        author: "Adm",
        text: "Lorem ipsum dolor sit amet constur adipelit sed do eiusmtempor incid dolore magna aliqu enim ad. minim veniam."
    },
    {
        img: "https://dummyimage.com/600x400/000/fff",
        title: "Pectus tristique lacinia non in diam mauris.",
        date: new Date(2023, 3, 17),
        author: "Adm",
        text: "Lorem ipsum dolor sit amet constur adipelit sed do eiusmtempor incid dolore magna aliqu enim ad. minim veniam."
    },
    {
        img: "https://dummyimage.com/600x400/000/fff",
        title: "Justo sit amet sem placerat tempus ipsum.",
        date: new Date(2023, 1, 22),
        author: "Adm",
        text: "Lorem ipsum dolor sit amet constur adipelit sed do eiusmtempor incid dolore magna aliqu enim ad. minim veniam."
    },
    {
        img: "https://dummyimage.com/600x400/000/fff",
        title: "Finibus Bonorum Malor.",
        date: new Date(2023, 0, 5),
        author: "Adm",
        text: "Lorem ipsum dolor sit amet constur adipelit sed do eiusmtempor incid dolore magna aliqu enim ad. minim veniam."
    },
    {
        img: "https://dummyimage.com/600x400/000/fff",
        title: "Lorem ipsum dolor sit amet constur adipelit incid dolore magna aliqu enim ad.",
        date: new Date(2022, 10, 17),
        author: "Adm",
        text: "Lorem ipsum dolor sit amet constur adipelit sed do eiusmtempor incid dolore magna aliqu enim ad. minim veniam."
    },
]

export const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

export function News() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Container>
                <Header>
                    <h2>Últimas Notícias</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm tempor</h3>
                </Header>
                {
                    windowWidth > 1119
                    ? <DesktopNewsDesign />
                    : <MobileNewsDesign />
                }
            </Container>
        </>
    )
}

const Container = styled.div`

    padding: 0 10rem 10rem;
    margin-top: 10rem;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 768px){
        padding: 0 5rem 10rem;
    }

    @media (max-width: 400px){
        padding: 0 1rem 10rem;
    }
`

const Header = styled.div`
    & > h3 {
        font-weight: normal;
        color: var(--gray);
    }
`

