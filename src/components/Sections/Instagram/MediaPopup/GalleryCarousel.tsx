import styled from "styled-components"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

interface PropsValues {
    mediaList: Media[]
}

interface Media {
    media_type: "IMAGE" | "VIDEO"
    media_url: string
    thumbnail_url: string
}

export function GalleryCarousel({ mediaList }: PropsValues) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const settings = {
        dots: true,
        infinite: false,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        cssEase: "linear",
        style: {width: `${windowWidth}px`, height: `${windowWidth}px`}
    };

    function handleMediaType(media: Media, index: number) {
        switch (media.media_type) {
            case "IMAGE": return <img key={index} className="media" src={media.media_url} />
            case "VIDEO": return (
                <video key={index} className="media" controls>
                    <source src={media.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )
            default: break;
        }
    }

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    

    return (
        <>
            <Container {...settings} >
                {
                    mediaList.map((media, index) => <CarouselItem>
                        {
                            handleMediaType(media, index)
                        }
                    </CarouselItem>)
                }
            </Container>
        </>
    )
}

const Container = styled(Slider)`

    max-width: 60rem;
    max-height: 60rem;

    position: relative;

    & > .slick-arrow {
        position: absolute;
    }
    & > .slick-prev {
        left: 1rem;
        z-index: 1;
    }
    & > .slick-next {
        right: 1rem;
    }

    & > .slick-disabled {
        opacity: 0;
    }

    & > .slick-dots {
        position: absolute;
        bottom: 1rem;
        display: flex !important;
        justify-content: center;
        gap: 0rem;

        & > li {
            width: auto;
            height: auto;
            margin: 0;
            & > button {
                &:before {
                    color: white;
                    opacity: 0.6;                    
                }
            }
        }

        & > .slick-active {
            & > button {
                &:before {
                    color: white;
                    opacity: 1;
                }
            }
        }
    }
`

const CarouselItem = styled.li`
    & .media {
        width: 100%;
        height: 100%;
    }
`