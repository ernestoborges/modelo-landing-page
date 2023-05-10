import axios from "axios"
import { useEffect, useState } from "react"
import { FeedItem } from "./FeedItem"
import styled from "styled-components"
import { MediaPopup } from "./MediaPopup/MediaPopup"


export interface FeedItemValues {
    id: string
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
    media_url: string
    permalink: string
    caption: string
    like_count: number
    comment_count: number
    thumbnail_url: string
    children: {
        data: {
            media_type: "IMAGE" | "VIDEO"
            media_url: string
            thumbnail_url: string
        }[]
    }
}

export function Instagram() {

    const [feedList, setFeedList] = useState<FeedItemValues[]>([]);

    const [selectedImage, setSelectedImage] = useState<FeedItemValues>();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function handleImageClick(image: FeedItemValues) {
        setSelectedImage(image);
        setIsPopupOpen(true);
    }

    async function getInstagramFeed() {

        const token = import.meta.env.VITE_REACT_APP_INSTAGRAM_API_KEY
        const fields = "media_url,media_type,permalink,caption,thumbnail_url,children{media_url,thumbnail_url, media_type}"
        const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`

        const { data } = await axios.get(url);
        setFeedList(data.data);
        console.log(data);
    }

    useEffect(() => {
        getInstagramFeed();
    }, [])

    return (
        <>
            <Container>
                <h2>Instagram</h2>
                <Grid>
                    {
                        feedList.map((feedItem, index) =>
                            <li key={index}
                                onClick={() => handleImageClick(feedItem)}
                            >
                                <FeedItem {...feedItem} />
                            </li>
                        )
                    }
                </Grid>
                {
                    isPopupOpen &&
                    <MediaPopup image={selectedImage} setIsPopupOpen={setIsPopupOpen}/>
                }
            </Container>
        </>
    )
}

const Container = styled.div`
    padding: 0 10rem 10rem;

    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 768px){
        padding: 0 5rem 10rem;
    }

    @media (max-width: 400px){
        padding: 0 1rem 10rem;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Grid = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-auto-rows: 30rem;
    column-gap: 0.4rem;
    row-gap: 0.4rem;
    justify-content: center;

    & > li {
        align-self: center;
        justify-self: center;
    }
`