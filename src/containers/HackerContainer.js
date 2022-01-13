import React, { useEffect, useState } from "react";
import HackerList from "../components/HackerList";

const HackerContainer = () => {
    const [stories, setStories] = useState([])

    useEffect(() => {
        getStories();
    },[]
    );

    const getStories = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then(stories => setStories(stories))
    }

    console.log(stories);

    return (
        <div className="main-container">
            {console.log(stories)}

            <h1>
                Hacker Stories
            </h1>
            <HackerList stories={stories}/>

        </div>
    )
}

export default HackerContainer;