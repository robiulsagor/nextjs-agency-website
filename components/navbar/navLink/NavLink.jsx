"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./navlink.module.css"

const NavLink = ({ item }) => {
    const pathname = usePathname()
    return (
        <div className={`${styles.container} ${pathname === item.path && styles.active}`}>
            <Link href={item.path}>{item.title} </Link>
        </div>
    )
}

export default NavLink