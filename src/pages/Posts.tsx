import React, { useEffect, useState } from 'react'
import { client, getPosts } from '../SanityClient';



const Posts = () => {
    const [postList, setPostList] = useState([]);


    const fetchedPosts = async () => {
        let fetchedPosts = await getPosts()
        //insert our response in the todoList state
        setPostList(fetchedPosts);

    };

    useEffect(
        () => {
            //now it will fetch todos on page load...
            fetchedPosts();
        },
        []
    );


    return (
        <>
            <div>posts</div>

            {JSON.stringify(postList)}
        </>
    )
}

export default Posts