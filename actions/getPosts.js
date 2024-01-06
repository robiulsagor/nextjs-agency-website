'use server'

export const getPosts = async () => {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await posts.json()
    return data
}

export const getSinglePost = async id => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await post.json()
    return data
}