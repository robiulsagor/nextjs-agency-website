"use client"
import Link from "next/link"
import styles from "./links.module.css"
import NavLink from "../navLink/NavLink"
import { useState } from "react"
import Image from "next/image"

const Links = () => {
    const linkList = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "contact",
            path: "/contact"
        },
        {
            title: "blog",
            path: "/blog"
        }
    ]

    const [open, setOpen] = useState(false)

    const session = true
    const isAdmin = true

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {
                    linkList.map(link => (
                        <NavLink item={link} key={link.title} />
                    ))
                }

                {
                    session ? (
                        <>
                            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                            <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )
                }
            </div>

            {/* <button className={styles.mobileBtn} onClick={() => setOpen(prev => !prev)}>Menu</button> */}
            <Image src="/menu.png" alt="menu icon" width={30} height={30} className={styles.mobileBtn}
                onClick={() => setOpen(prev => !prev)} />
            {
                open && (
                    <div className="mobileMenu">
                        {
                            linkList.map(link => (
                                <NavLink item={link} key={link.title} />
                            ))
                        }
                    </div>
                )
            }

        </div>

    )
}

export default Links