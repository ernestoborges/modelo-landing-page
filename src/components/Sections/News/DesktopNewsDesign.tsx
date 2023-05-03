import { useState } from "react"
import styled from "styled-components"
import { HiOutlineUserCircle } from "react-icons/hi"
import { MdOutlineDateRange } from "react-icons/md"
import { news, months } from "./News"

export function DesktopNewsDesign() {

    const [selectedNew, setSelectedNew] = useState(news[0]);

    return (
        <>
            <Container>
                <NewsCard>
                    <img src={selectedNew.img} />
                    <div>
                        <header>
                            <h4>{selectedNew.title}</h4>
                            <NewsCardDetails>
                                <div>
                                    <HiOutlineUserCircle />
                                    <h5>{selectedNew.author}</h5>
                                </div>
                                <div>
                                    <MdOutlineDateRange />
                                    <h5>{selectedNew.date.toLocaleDateString()}</h5>
                                </div>
                            </NewsCardDetails>
                        </header>
                        <section>
                            {selectedNew.text}
                        </section>
                        <footer>
                            <button>Ler Mais</button>
                        </footer>
                    </div>
                </NewsCard>
                <NewsList>
                    {
                        news.map((newsItem, index) =>
                            <NewsItem
                                onClick={() => {
                                    setSelectedNew(news[index])
                                }}
                            >
                                <img src={newsItem.img} />
                                <div>
                                    <h4>{newsItem.title}</h4>
                                    <p>
                                        {`${newsItem.date.getDay()} de ${months[newsItem.date.getMonth()]}, ${newsItem.date.getFullYear()} `}
                                    </p>
                                </div>
                            </NewsItem>
                        )
                    }
                </NewsList>
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
`

const NewsCard = styled.article`
    width: 60rem;
    position: relative;
    height: 40rem;

    & > img {
        width: 100%;
        height: 80%;
        object-fit: cover;
    } 

    & > div {
        padding: 1rem 2rem;
        height: 50%;
        margin: 0 4rem;
        position: absolute;
        top: 40%;
        right: 0;
        z-index: 2;
        background-color: var(--white);
        border: 0.1rem solid var(--black);

        display: flex;
        flex-direction: column;
        gap: 1rem;

        & > header {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        & > section {
            flex-grow: 1;
            text-align: justify;
        }

        & > footer {
            display: flex;
            justify-content: center;
            margin-top: 1rem;

            & > button {
                background-color: var(--gray);
                color: var(--white);
                border: 0;
                border-radius: 0.4rem;
                padding: 1rem 2rem;
                cursor: pointer;
                border: 0.1rem solid transparent;

                &:hover {
                    border: 0.1rem solid var(--black);
                    color: var(--black);
                }
            }
        }
    }
`

const NewsCardDetails = styled.div`
    display: flex;
    gap: 2rem;

    & > div {
        display: flex;
        align-items: center;
        gap: 1rem;

        & > * {
            font-weight: normal;
            color: var(--gray)
        }
    }
`

const NewsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const NewsItem = styled.li`
    display: flex;
    gap: 1rem;
    cursor: pointer;
    border: 0.1rem solid transparent;
    padding: 0.4rem;

    &:hover {
        border: 0.1rem solid var(--black);
    }

    & > img {
        width: 8rem;
    }

    & > div {
        & > h4 {
            font-size: 2rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 35rem;
        }
    }
`