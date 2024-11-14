import Link from "next/link";

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

interface IBookList {
    copyright: string;
    num_results: number;
    results: IBookListInfo[];
}

export default async function Home() {
    const bookList: IBookList = await getBookList();
    return (
        <div>
            <ul>
                {bookList.results.map((book) => (
                    <li>
                        <Link href={`/list/${book.list_name_encoded}`}>{book.display_name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}