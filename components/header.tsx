"use client"

import { usePathname } from "next/navigation";
import styles from "../styles/header.module.css";
import Link from "next/link";

export default function Header() {
    const pathname = usePathname();
    return (
        <div className={styles.container}>
            <p>
                <Link
                    href="/"
                    className={pathname === "/" ? styles.active : ""}>
                    메인
                </Link>
            </p>
            <p>
                <Link
                    href="/about"
                    className={pathname === "/about" ? styles.active : ""}>
                    더보기
                </Link>
            </p>
        </div>
    )
}