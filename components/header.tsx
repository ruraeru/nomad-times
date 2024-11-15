"use client"

import { usePathname } from "next/navigation";
import styles from "../styles/header.module.css";
import Link from "next/link";

export default function Header() {
    const pathname = usePathname();
    return (
        <div className={styles.container}>
            <p>
                <Link href="/">Home</Link> {pathname === "/" && "🔥"}
            </p>
            <p>
                <Link href="/about">About</Link> {pathname === "/about" && "🔥"}
            </p>
        </div>
    )
}