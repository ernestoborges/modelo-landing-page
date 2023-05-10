import styled from "styled-components"
import { FeedItemValues } from "./Instagram"
// import { FaHeart } from "react-icons/fa"
// import { RiChat3Fill } from "react-icons/ri"

export function FeedItem(props: FeedItemValues) {

    return (
        <>
            <Container>
                <section>
                    <img src={
                        props.media_type === "IMAGE"
                            ? props.media_url
                            : props.thumbnail_url
                    } alt="" />
                </section>
                <MediaDetails>
                    {/* <div className="icons-container">
                        <div className="likes">
                            <FaHeart />
                            <span>{props.like_count ? props.like_count : 49}</span>
                        </div>
                        <div className="comments">
                            <RiChat3Fill />
                            <span>{props.comment_count ? props.comment_count : 23}</span>
                        </div>
                    </div> */}
                    <p className="title">
                        {props.caption}
                    </p>
                </MediaDetails>
            </Container>
        </>
    )
}

const Container = styled.article`
    max-width: 30rem;
    max-height: 30rem;
    position: relative;
    cursor: pointer;

    &:hover {
       
    }

    & > section {
        & > img,
        & > video {
            max-width: 30rem;
        }
    }

`

const MediaDetails = styled.header`
    padding: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-end;
    
    transition: background-color 0.5s;
    background-color: rgba( 0, 0, 0, 0);

    ${Container}:hover & {
        background-color: rgba( 0, 0, 0, 0.5);
    }

    & .icons-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        display: flex;
        align-items: center;

    }

    & .likes {
        color: var(--white);
    }

    & .comments {
        color: var(--white);
        & > svg {
            transform: scaleX(-1);
        }
    }

    & .title {
        font-weight: normal;
        display: -webkit-box;
        -webkit-line-clamp: 6; /* max number of lines to display */
        -webkit-box-orient: vertical;
        overflow: hidden;
        color: transparent;
        
        color: transparent;
        transition: color 0.5s ease-out 0s;

        ${Container}:hover & {
            color: white;
            transition: color 0s ease-out 0s;
        }
    }
`



