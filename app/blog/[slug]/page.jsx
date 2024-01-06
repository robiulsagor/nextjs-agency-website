import Image from "next/image";
import styles from "./singlePost.module.css"

const SinglePost = ({ params }) => {
    console.log(params);
    const { slug } = params
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/15241238/pexels-photo-15241238/free-photo-of-asphalt-road-through-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="img" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>Title of the post</h2>
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

                <p className={styles.content}> this is the content of the post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, velit maiores obcaecati iusto ratione saepe eos minima dolorem. Commodi tenetur in exercitationem omnis sint ex sapiente, cumque voluptatem maiores minus? Totam vel cumque suscipit eum, asperiores odio. Laboriosam, magni facilis illo expedita consectetur a nulla? Sequi fuga sed dolorem, incidl earum eveniet! Quam quod mollitia dolores eos dicta distinctio maxime alias iste voluptate, rem aliquid deleniti obcaecati et corrupti culpa cum similique adipisci sequi perspiciatis qui nostrum doloremque. Deleniti voluptatem voluptates nostrum corrupti obcaecati, sequi inventore aperiam? Itaque, corrupti.


                </p>

            </div>
        </div>
    )
}

export default SinglePost