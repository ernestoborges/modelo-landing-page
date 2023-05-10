import styled from "styled-components"
import { FeedItemValues } from "../Instagram"
import { GalleryCarousel } from "./GalleryCarousel";

interface PropsValues {
    image: FeedItemValues | undefined
    setIsPopupOpen: (value: boolean) => void;
}

export function MediaPopup({ image, setIsPopupOpen }: PropsValues) {

    const handlePopupClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            setIsPopupOpen(false);
        }
    };

    function handleMediaDisplay() {
        switch (image?.media_type) {
            case "IMAGE": return <img className="media" src={image.media_url} alt="Popup image" />
            case "VIDEO": return (
                <video
                    className="media"
                    controls
                    autoPlay
                >
                    <source src={image.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )
            case "CAROUSEL_ALBUM": return <GalleryCarousel mediaList={image.children.data} />
            default: break;
        }
    }

    return (
        <>
            <Container onClick={handlePopupClick}>
                {
                    image === undefined
                        ? <NotFound>
                            Não encontrado!
                        </NotFound>

                        : <Post>
                            <PostMedia>
                                {
                                    handleMediaDisplay()
                                }
                            </PostMedia>
                        </Post>
                }

            </Container>
        </>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;

    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    align-items: center;
    justify-content: center;
`

const NotFound = styled.div`
`

const Post = styled.div`
    
`

const PostMedia = styled.div`
    & .media {
        width: 100%;
        max-width: 60rem;
    }
`