import Image from "next/image"
import styles from "./about.module.css"

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <p className={styles.aboutText}>about agency</p>

                <h3 className={styles.aboutHeader}>We create digital ideas that are bigger, bolder and better.</h3>

                <p className={styles.aboutDesc}>We create digital ideas that are bigger, bolder and better. Web believe in good ideas flexibility and precission. We're world's special best team consulting and finance solution provider. Wide range of web and software development services.</p>

                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <h4 className={styles.cardHeader}>
                            10 K+
                        </h4>
                        <span className={styles.cardText}>Year of experience</span>
                    </div>

                    <div className={styles.card}>
                        <h4 className={styles.cardHeader}>
                            234 K+
                        </h4>
                        <span className={styles.cardText}>People reached</span>
                    </div>

                    <div className={styles.card}>
                        <h4 className={styles.cardHeader}>
                            5 K+
                        </h4>
                        <span className={styles.cardText}>Services and plugins</span>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src={'/about.png'} alt="about img" fill />
            </div>
        </div>
    )
}

export default About