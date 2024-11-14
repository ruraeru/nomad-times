import styles from "../../../styles/movie-detail.module.css";

async function getBookDetail(id: string) {
    return fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
        .then(res => res.json())
        .then(json => json.results)
        .then(results => results.books);
}

interface IBookData {
    rank: number;
    rank_last_week: number;
    weeks_on_list: number;
    asterisk: number;
    dagger: number;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    description: string;
    price: string;
    title: string;
    author: string;
    contributor: string;
    contributor_note: string;
    book_image: string;
    book_image_width: number;
    book_image_height: number;
    amazon_product_url: string;
    age_group: string;
    book_review_link: string;
    first_chapter_link: string;
    sunday_review_link: string;
    article_chapter_link: string;
    isbns: object;
    buy_links: object;
    book_uri: string;
}

interface IBookDetailInfo {
    bestsellers_date: string;
    books: IBookData[];
    corrections: [];
    display_name: string;
    list_name: string;
    list_name_encoded: string;
    next_published_date: string;
    normal_list_ends_at: number;
    previous_published_date: string;
    published_date: string;
    published_date_description: string;
    updated: string;
}

export default async function List({ params }) {
    const { id } = await params;
    const bookDeatil: IBookData[] = await getBookDetail(id);
    return (
        <div className={styles.container}>
            <h1>{id.replaceAll("-", " ")}</h1>
            <div className={styles.gridWrapper}>
                {bookDeatil.map((book) => (
                    <div>
                        <img src={book.book_image} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <button>
                            <a href={book.amazon_product_url}>But now &rarr;</a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}