import axios from "axios"
import { useEffect, useState } from "react"


interface FeedItem {
    id: string
    media_type: "IMAGE" | "VIDEO"
    media_url: string
    permalink: string
    caption: string
    likes: number
}
export function Instagram() {

    const [feedList, setFeedList] = useState<FeedItem[]>([]);

    async function getInstagramFeed() {

        const token = import.meta.env.VITE_REACT_APP_INSTAGRAM_API_KEY
        const fields = "media_url,media_type,permalink,caption,likes"
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
                            <article>
                                <section>
                                    {
                                        feedItem.media_type === "IMAGE"
                                            ? <img src={feedItem.media_url} alt="" />
                                            : <video controls>
                                                <source src={feedItem.media_url} type="video/mp4" />
                                            </video>
                                    }
                                    <p>
                                        {feedItem.caption}
                                    </p>
                                </section>
                            </article>
                        </li>
                    )
                }
            </ul>
        </>
    )
}