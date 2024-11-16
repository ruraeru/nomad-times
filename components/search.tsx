"use client"

import { useState } from "react";
import styles from "../styles/sortHeader.module.css";
import { IBookList } from "../app/(home)/page";


const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

export default function SearchHeader({ bookList }: { bookList: IBookList }) {
    const [char, setChar] = useState(null);
    console.log(bookList)
    return (
        <ul className={styles.sortHeader}>
            {alphabet.map((el) => (
                <li key={el}>{el}</li>
            ))}
        </ul>
    )
}