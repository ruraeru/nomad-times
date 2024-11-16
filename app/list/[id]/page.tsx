import Rating from "../../../components/rating";
import styles from "../../../styles/movie-detail.module.css";

export const metadata = {
    title: "bookList"
}

async function getBookDetail(id: string) {
    return fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)
        .then(res => res.json())
        .then(json => json.results);
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
    buy_links: BuyLinks[];
    book_uri: string;
}

interface BuyLinks {
    name: string;
    url: string;
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
    const bookDeatil: IBookDetailInfo = await getBookDetail(id);
    console.log(bookDeatil);
    return (
        <div className={styles.container}>
            {/* 제목에 있는 "-"를 공백으로 치환하여 보여줌 */}
            <h1>{id.replaceAll("-", " ")}</h1>
            <div>
                <div className={styles.bookGrid}>
                    {bookDeatil.books.map((book) => (
                        //카드 전체 클릭 시 아마존 구매 링크로 감
                        <a href={book.amazon_product_url}>
                            <div className={styles.bookCard}>
                                <div className={styles.cardInfo}>
                                    <div className={styles.imgContainer}>
                                        <img src={book.book_image} />
                                    </div>
                                    <div className={styles.rankContainer}>
                                        <p className={styles.rank}>{book.rank}</p>
                                        {/* 지난 주 랭크와 현재 랭크의 차이를 보여줌 */}
                                        <Rating rank={book.rank} lastWeekRank={book.rank_last_week} />
                                    </div>
                                    <div className={styles.bookInfo}>
                                        <p className={styles.title}>{book.title}</p>
                                        <p className={styles.author}>{book.author}</p>
                                    </div>
                                </div>
                                <div className={styles.description}>
                                    <strong>{book.description.slice(0, 150)}...</strong>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}