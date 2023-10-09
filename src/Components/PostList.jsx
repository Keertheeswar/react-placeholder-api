import { useState, useEffect } from 'react'
import Post from './Post'
const PostList = () => {
    const [posts, setPosts] = useState([])
    // console.log(posts)
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                const newPosts = data.map(p => {
                    return {
                        title: p.title,
                        body: p.body
                    }
                })
                setPosts(newPosts)
            })

    }, [])
    return <>
        {posts.map(p => {
            return <Post title={p.title} body={p.body} />
        })}
    </>
}

export default PostList