import styled from "styled-components"
import { news, months } from "./News"
import { useEffect, useState } from "react"
import { HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";

export function MobileNewsDesign() {

    const [selectedNew, setSelectedNew] = useState(0);

    const [descriptionHeight, setDescriptionHeight] = useState(40);

    useEffect(() => {
        const wrapper = document.getElementById("description-wrapper")
        if (wrapper) {
            setDescriptionHeight(wrapper.offsetHeight);
        }
    }, [selectedNew]);

    return (
        <>
            <Container>
                <NewsList>
                    {
                        news.map((newsItem, index) =>
                            <NewsItem
                                key={index}
                                className={selectedNew === index ? "selected-new" : ""}
                                onClick={() => {
                                    setSelectedNew(index)
                                }}
                            >
                                <img src={newsItem.img} />
                                <article>
                                    <header>
                                        <h4>{newsItem.title}</h4>
                                        <p>
                                            {`${newsItem.date.getDay()} de ${months[newsItem.date.getMonth()]}, ${newsItem.date.getFullYear()} `}
                                        </p>
                                        <NewsCardDetails>
                                            <div>
                                                <HiOutlineUserCircle />
                                                <h5>{newsItem.author}</h5>
                                            </div>
                                            <div>
                                                <MdOutlineDateRange />
                                                <h5>{newsItem.date.toLocaleDateString()}</h5>
                                            </div>
                                        </NewsCardDetails>
                                    </header>
                                    <section
                                        style={{
                                            height: selectedNew === index
                                                ? descriptionHeight + "px"
                                                : "0"
                                        }}
                                    >
                                        <div id={selectedNew === index ? "description-wrapper" : ""}>
                                            <p>
                                                {newsItem.text}
                                            </p>
                                            <ButtonContainer>
                                                <button>Acessar</button>
                                            </ButtonContainer>
                                        </div>
                                    </section>
                                </article>
                            </NewsItem>
                        )
                    }
                </NewsList>
            </Container>
        </>
    )
}

const Container = styled.div`

`

const NewsList = styled.ul`

`

const NewsItem = styled.li`
    position: relative; 
    display: flex;
    gap: 1rem;
    cursor: pointer;
    border: 0.1rem solid transparent;
    padding: 0.4rem;
    width: 100%;

    & > img {
        width: 8rem;
        transition: width 0.4s;
    }

    & > article {
        width: 100%;
        overflow: hidden;

        & > header {
            & > h4 {
                font-size: 2rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }

        & > section {
            overflow: hidden;
        }
    }

    &.selected-new {
        flex-direction: column;
        align-items: flex-start;

        & > img {
            width: 30rem;
            object-fit: cover;
        }

        & > article {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;

            & > header > h4 {
                white-space: normal;
            }
        }
    }
`

const ButtonContainer = styled.div`

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