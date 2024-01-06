import Image from "next/image"
import styles from "./contact.module.css"
const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="contact" fill />
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input type="text" className={styles.input} name="" placeholder="Name and Surname" />
                    <input type="email" className={styles.input} name="" placeholder="Email" />
                    <input type="text" className={styles.input} name="" placeholder="Phone Number (optional)" />
                    <textarea name="" className={styles.textarea} id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button className={styles.formSubmit}>Save</button>
                </form>
            </div>
        </div>
    )
}

export default Contact