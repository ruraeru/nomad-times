import Link from "next/link";
import styles from "../../styles/home.module.css";

async function getBookList() {
    return fetch("https://books-api.nomadcoders.workers.dev/lists").then(res => res.json());
}

interface IBookListInfo {
    display_name: string;
    list_name: string;
    list_name_encoded: string;
    newest_published_date: string;
    oldest_published_date: string;
    updated: string;
}

export interface IBookList {
    copyright: string;
    num_results: number;
    results: IBookListInfo[];
}


export default async function Home() {
    const bookList: IBookList = await getBookList();
    return (
        <div className={styles.container}>
            <div className={styles.listWrapper}>
                <h1>The New York Times Best Seller Explorer</h1>
                {/* 추후 확장 예정 sorting 기능 */}
                {/* <SearchHeader /> */}
                <div>
                    <ul>
                        {bookList.results.map((book, index) => (
                            <Link key={index} href={`/list/${book.list_name_encoded}`}>
                                <li>
                                    {book.display_name}
                                </li>
                            </Link>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}