import React from 'react'

const BlogPage = ({ params }) => {
    console.log(params);
    const { slug } = params
    return (
        <div>
            <h3>Loading the post related to:: {slug}</h3>
        </div>
    )
}

export default BlogPage