import PostCard from "@/components/postCard/postCard"
import styles from "./blog.module.css"

const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.postCard}>
                <PostCard />
            </div>
            <div className={styles.postCard}>
                <PostCard />
            </div>
            <div className={styles.postCard}>
                <PostCard />
            </div>
            <div className={styles.postCard}>
                <PostCard />
            </div>
            <div className={styles.postCard}>
                <PostCard />
            </div>
        </div>
    )
}

export default Blog