import styles from "../../../styles/movie-detail.module.css";

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
            <h1>{id.replaceAll("-", " ")}</h1>
            <div>
                <h2>{bookDeatil.bestsellers_date} ~ {bookDeatil.published_date} 기준</h2>
                <div>
                    <select>
                        <option>성별</option>
                    </select>
                    <select>
                        <option>연령</option>
                    </select>
                    <select>
                        <option>품절 포함</option>
                    </select>
                    <select>
                        <option>24개씩 보기</option>
                    </select>
                    <button>
                        <img src={"https://image.yes24.com/sysimage/reNew/corner/partnerShop/ico_vTp_t.svg"} alt="정렬 버튼" />
                    </button>
                </div>
                <div>
                    {bookDeatil.books.map((book) => (
                        <div className={styles.bookCard}>
                            <div>
                                <h1>{book.rank}</h1>
                                <h2>{book.rank_last_week === 0 ? "_" : book.rank_last_week}</h2>
                            </div>
                            <div>
                                <img src={book.book_image} />
                                <button>
                                    <a href={book.amazon_product_url}>미리보기</a>
                                </button>
                            </div>
                            <div>
                                <h3>{book.title}</h3>
                                <p>{book.author} 저 | {book.publisher} | {bookDeatil.bestsellers_date}</p>
                                <p>{book.price}원 (10% 할인) P 750원</p>
                                <ul className={styles.tagList}>
                                    {book.buy_links.map((link) => (
                                        <li>
                                            <a href={link.url}>
                                                #{link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}