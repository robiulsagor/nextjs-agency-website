import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.header}>Creative thoughts agency.</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quas laboriosam? Rem, vel. Lorem ipsum dolor sit amet.
        </p>

        <div className={styles.buttonsContianer}>
          <button className={styles.button}>learn more</button>
          <button className={styles.button}>contact</button>
        </div>

        <div className={styles.brandsContainer}>
          <Image src={'/brands.png'} alt='brands img' fill />
        </div>



      </div>
      <div className={styles.imgContainer}>
        <Image src={'/hero.gif'} alt='hero img' fill />
      </div>

    </div>
  )
}
