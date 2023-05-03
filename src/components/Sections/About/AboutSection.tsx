import { useEffect, useState } from "react";
import styled from "styled-components"

export function AboutSection() {

    const [isDetailOn, setIsDetailOn] = useState(false);
    const [detailHeight, setDetailHeight] = useState(50);

    useEffect(() => {
        const wrapper = document.getElementById("detail-wrapper")
        if(wrapper){
            setDetailHeight(wrapper.offsetHeight);
        }
    }, [isDetailOn]);

    return (
        <>
            <Container>
                <article>
                    <Header>
                        <h2>Quem Somos</h2>
                    </Header>
                    <MainSection>
                        <div>
                            <img src="https://dummyimage.com/300x150/000/fff" />
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tristique velit vitae volutpat. Maecenas vestibulum euismod erat sed euismod. Aliquam convallis molestie dictum. Phasellus ac felis vestibulum, eleifend nibh quis, convallis urna. Nullam malesuada malesuada purus nec semper. Sed eu nisl maximus, suscipit purus ac, imperdiet neque. Proin fringilla quis est eget rutrum. Mauris nisi lacus, imperdiet non condimentum accumsan, venenatis et arcu. Aliquam non dui nibh. Nulla leo risus, vulputate sit amet quam nec, blandit sodales leo.</p>
                        </div>
                    </MainSection>
                    <Section
                        id="detail-section"
                        style={{
                            height: isDetailOn
                                ? detailHeight+"px"
                                : "0"
                        }}
                    >
                        <div id="detail-wrapper" >
                            <div>
                                <h3>Lorem</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tristique velit vitae volutpat. Maecenas vestibulum euismod erat sed euismod. Aliquam convallis molestie dictum. Phasellus ac felis vestibulum, eleifend nibh quis, convallis urna.
                                </p>
                            </div>
                            <div>
                                <h3>Ipsum</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tristique velit vitae volutpat. Maecenas vestibulum euismod erat sed euismod. Aliquam convallis molestie dictum. Phasellus ac felis vestibulum, eleifend nibh quis, convallis urna.
                                </p>
                            </div>
                            <div>
                                <h3>Dolor</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tristique velit vitae volutpat. Maecenas vestibulum euismod erat sed euismod. Aliquam convallis molestie dictum. Phasellus ac felis vestibulum, eleifend nibh quis, convallis urna.
                                </p>
                            </div>
                        </div>
                    </Section>
                    <Footer>
                        <button onClick={() => setIsDetailOn(!isDetailOn)}>{`Mostrar ${isDetailOn ? "menos" : "mais"}`}</button>
                    </Footer>
                </article>
            </Container>
        </>
    )
}

const Container = styled.div`
    padding: 0 10rem;

    @media (max-width: 768px){
        padding: 0 5rem;
    }

    @media (max-width: 400px){
        padding: 0 1rem;
    }
`

const Header = styled.header`
    margin-bottom: 4rem;
`

const MainSection = styled.section`
    display: flex;
    align-items: center;
    gap: 6rem;

    & p {
        text-align: justify;
    }

    @media (max-width: 768px){
        flex-direction: column;
    }
`

const Section = styled.section`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    overflow: hidden;
    transition: height 0.3s ease-out;

    & > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    padding: 2rem 0;

    & > button {
        background-color: transparent;
        border: 0.1rem solid var(--black);
        padding: 0.4rem 1rem;
        border-radius: 0.4rem;
        cursor: pointer;

        transition: color 0.3s, background-color 0.3s;

        &:hover {
            background-color: var(--black);
            color: var(--white);
        }
    }
`