import PostCard from "@/components/postCard/postCard"
import styles from "./blog.module.css"
import { getPosts } from "@/actions/getPosts";

const Blog = async () => {
    const posts = await getPosts()
    console.log(posts);
    return (
        <div className={styles.container}>
            {posts && posts.length > 0 && posts.map(post => (
                <div className={styles.postCard}>
                    <PostCard post={post} />
                </div>
            ))}


        </div>
    )
}

export default Blog