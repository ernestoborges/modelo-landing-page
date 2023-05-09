import axios from "axios"
import { useEffect, useState } from "react"
import { FeedItem } from "./FeedItem"


export interface FeedItemValues {
    id: string
    media_type: "IMAGE" | "VIDEO"
    media_url: string
    permalink: string
    caption: string
    like_count: number
    comment_count: number
}

export function Instagram() {

    const [feedList, setFeedList] = useState<FeedItemValues[]>([]);

    async function getInstagramFeed() {

        const token = import.meta.env.VITE_REACT_APP_INSTAGRAM_API_KEY
        const fields = "media_url,media_type,permalink,caption,like_count,comments_count"
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
            <h2>Instagram</h2>
            <ul>
                {
                    feedList.map((feedItem, index) =>
                        <li key={index}>
                            <FeedItem {...feedItem} />
                        </li>
                    )
                }
            </ul>
        </>
    )
}