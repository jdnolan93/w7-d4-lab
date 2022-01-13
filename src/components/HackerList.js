import React from "react";
import Story from "./Story";

const HackerList = ({stories}) => {
    const storyNodes = stories.map((story, index) => {
        return <Story story = {story} key = {index}/>
    }
    )

   return (
   <div>
       <ul>
           {storyNodes}
       </ul>
   </div>
   )
}


export default HackerList;