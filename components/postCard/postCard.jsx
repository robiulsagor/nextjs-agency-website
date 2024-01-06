import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"
import { getPosts } from "@/actions/getPosts"

const PostCard = async ({ post }) => {

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/15091952/pexels-photo-15091952/free-photo-of-woman-near-the-lake-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="post img" className={styles.img} fill />
                </div>
                <p className={styles.date}> 01.01.2024 </p>
            </div>

            <div className={styles.bottom}>
                <h4 className={styles.title}>{post.title} </h4>
                <p className={styles.desc}>{post.body.slice(0, 55)}... </p>
                <Link href={`/blog/${post.id}`} className={styles.readMore}>read more</Link>
            </div>
        </div>
    )
}

export default PostCard