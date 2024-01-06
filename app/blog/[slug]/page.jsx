import Image from "next/image";
import styles from "./singlePost.module.css"
import { getSinglePost } from "@/actions/getPosts";

const SinglePost = async ({ params }) => {
    console.log(params);
    const { slug } = params
    const post = await getSinglePost(slug)
    console.log(post);
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/15241238/pexels-photo-15241238/free-photo-of-asphalt-road-through-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="img" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>{post?.title} </h2>
                <div className={styles.desc}>
                    <Image src={"https://images.pexels.com/photos/19133309/pexels-photo-19133309/free-photo-of-young-woman-in-a-hijab-walking-in-front-of-a-monumental-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt="avatar" width={50} height={50} className={styles.avatar} />

                    <div className={styles.descCard}>
                        <p className={styles.descTitle}>Author</p>
                        <p className={styles.descValue}>Robiul Islam Sagar</p>
                    </div>
                    <div className={styles.descCard}>
                        <p className={styles.descTitle}>Published</p>
                        <p className={styles.descValue}>02-01-2024</p>
                    </div>
                </div>

                <p className={styles.content}>
                    {post?.body}

                </p>

            </div>
        </div>
    )
}

export default SinglePost