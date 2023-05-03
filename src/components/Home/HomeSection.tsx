import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function HomeSection() {

    const carouselItems = [
        { img: "src/assets/images/2.jpg" },
        { img: "src/assets/images/1.jpg" },
        { img: "src/assets/images/3.jpg" },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
        <>
            <Container>
                <Carousel {...settings}>
                    {
                        carouselItems.map((item, index) =>
                            <CarouselItem key={index}>
                                <img src={item.img} />
                            </CarouselItem>
                        )
                    }
                </Carousel>
            </Container >
        </>
    )
}

const Container = styled.div`
    margin-top: 6rem;
`

const Carousel = styled(Slider)`
    
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
    & > .slick-dots {
        position: absolute;
        bottom: 1rem;

        & > li {
            & > button {
                &:before {
                    color: white;
                    opacity: 1;                    
                }
            }
        }

        & > .slick-active {
            & > button {
                &:before {
                    color: black;                    
                }
            }
        }
    }
`

const CarouselItem = styled.div`

    & > img {
        width: 100%;
        max-height: calc(100vh - 60px);
        object-fit: cover;
        object-position: top;

        @media (max-width: 768px) {
            aspect-ratio: 1.5 / 1;
        }
    }
`