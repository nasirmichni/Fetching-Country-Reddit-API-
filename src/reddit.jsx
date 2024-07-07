import React, { useEffect, useState } from "react";
import axios from "axios";
function Reddit(){
    let [posts, setPosts] = useState([])
    useEffect(() =>{
        axios.get('https://www.reddit.com/r/reactjs.json')
    .then(response =>{
        let newPosts = response.data.data.children.map(obj => obj.data)
        setPosts(newPosts)
        console.log(newPosts)
    })
    .catch(error =>{
        console.log(`Fetching Error Data`, error)
    })
    }, [])
return(
    <div>
<h2>React.Js Fetching Data with API</h2>
<ul>
    {posts.map(post =>(
        <li key={post.id}>
            <a href={post.url} target="_blank" rel="noopener noreffer">{post.title}</a>
        </li>
    ))}
</ul>
    </div>
)
}
export default Reddit