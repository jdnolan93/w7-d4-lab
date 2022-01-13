import React, { useEffect, useState } from "react";
import HackerList from "../components/HackerList";

const HackerContainer = () => {
    
    const [stories, setStories] = useState([]);
    const [arrayStories,setArrayStories]= useState([])
   

    useEffect(() => {
        getStories();
    }, []
    );
    
    useEffect(() => {getByid(stories)},
    [stories])
    
    
    const getStories = () => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
        .then(res => res.json())
        .then(stories => setStories(stories))
    
    }
   
    
    const getByid = (list) => { 
    const array = list.slice(0,5)
    const newArray = array.map(x => fetch(`https://hacker-news.firebaseio.com/v0/item/${x}.json`).then(res => res.json))

   
    }
    
   
    
    
    
   

    
    
    
    
    



    

    return (
        <div className="main-container">
            {console.log(arrayStories)}
           
            <h1>
                Hacker Stories
            </h1>
            <HackerList stories={arrayStories}/>

        </div>
    )
}

export default HackerContainer;