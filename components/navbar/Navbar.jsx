import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div>
                <Link className="logo" href="/">Sagar</Link>
            </div>

            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar