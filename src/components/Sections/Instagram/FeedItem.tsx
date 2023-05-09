import styled from "styled-components"
import { FeedItemValues } from "./Instagram"
import { FaHeart } from "react-icons/fa"
import { RiChat3Fill } from "react-icons/ri"

export function FeedItem(props: FeedItemValues) {

    return (
        <>
            <Container>
                <section>
                    {
                        props.media_type === "IMAGE"
                            ? <img src={props.media_url} alt="" />
                            : <video>
                                <source src={props.media_url} type="video/mp4" />
                            </video>
                    }
                </section>
                <MediaDetails>
                    <div className="icons-container">
                        <div className="likes">
                            <FaHeart />
                            <span>{props.like_count ? props.like_count : 49}</span>
                        </div>
                        <div className="comments">
                            <RiChat3Fill />
                            <span>{props.comment_count ? props.comment_count : 23}</span>
                        </div>
                    </div>
                    <h3 className="title">
                        {props.caption}
                    </h3>
                </MediaDetails>
            </Container>
        </>
    )
}

const Container = styled.article`
    max-width: 30rem;
    position: relative;

    & > section {
        & > img,
        & > video {
            max-width: 30rem;
        }
    }
`

const MediaDetails = styled.header`
    background-color: rgba( 0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: flex-end;


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
        color: var(--white);
        padding: 1rem;
        font-weight: normal;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`