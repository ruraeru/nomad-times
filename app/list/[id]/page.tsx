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
                            <div className={styles.imgContainer}>
                                <img src={book.book_image} />
                                <button>
                                    <a href={book.amazon_product_url}>미리보기</a>
                                </button>
                            </div>
                            <div className={styles.cardInfo}>
                                <svg className={book.rank !== 1 && styles.hide} xmlns="http://www.w3.org/2000/svg" width="118" height="24" fill="none" viewBox="0 0.5 118 24">
                                    <desc>교보문고 Best 1</desc>
                                    <path fill="url(#badge_first_rank_svg__a)" d="M0 8.5a8 8 0 0 1 8-8h110v16a8 8 0 0 1-8 8H0z" />
                                    <mask id="badge_first_rank_svg__b" width="118" height="24" x="0" y="0" maskUnits="userSpaceOnUse">
                                        <path fill="#fff" d="M6 .5h112v18a6 6 0 0 1-6 6H0v-18a6 6 0 0 1 6-6" />
                                    </mask>
                                    <g mask="url(#badge_first_rank_svg__b)">
                                        <path fill="url(#badge_first_rank_svg__c)" d="M101.5 42.5c11.322 0 20.5-10.297 20.5-23s-9.178-23-20.5-23S81 6.797 81 19.5s9.178 23 20.5 23" opacity="0.15" />
                                        <path fill="url(#badge_first_rank_svg__d)" d="M80.5 59.5c12.426 0 22.5-11.193 22.5-25s-10.074-25-22.5-25S58 20.693 58 34.5s10.074 25 22.5 25" opacity="0.13" />
                                    </g>
                                    <path fill="#fff" d="M22.927 19H11.119a.55.55 0 0 1-.333-.136.56.56 0 0 1-.182-.314l-1.34-7.422H9.23c-.27 0-.532-.09-.747-.257-.215-.166-.37-.4-.44-.664a1.27 1.27 0 0 1 .046-.8c.102-.254.283-.468.516-.607a1.215 1.215 0 0 1 1.483.181 1.268 1.268 0 0 1 .219 1.502l3.107 1.692q.041.024.085.04a.522.522 0 0 0 .51-.24l.949-1.45 1.342-2.247a1.25 1.25 0 0 1-.464-.619 1.27 1.27 0 0 1 .429-1.412 1.22 1.22 0 0 1 1.455-.01c.212.156.37.377.45.63a1.27 1.27 0 0 1-.46 1.402l2.386 3.706a.56.56 0 0 0 .281.238q.038.006.075.005a.5.5 0 0 0 .24-.06l2.15-1.178.852-.49a1.27 1.27 0 0 1 .21-1.504 1.215 1.215 0 0 1 1.483-.187c.234.138.415.35.518.605.102.254.12.535.05.8-.071.265-.226.498-.44.665a1.2 1.2 0 0 1-.747.258h-.025l-.071.362-.067.374-.043.242-.019.11c-.344 1.93-1.058 5.949-1.148 6.335-.095.404-.36.45-.47.45M17 16.287q.076 0 .142.037l1.2.652a.3.3 0 0 0 .27.008.3.3 0 0 0 .163-.201.3.3 0 0 0 .003-.134l-.253-1.304a.31.31 0 0 1 .092-.285l.977-.902a.307.307 0 0 0-.167-.528l-1.344-.168a.29.29 0 0 1-.233-.169l-.582-1.219a.298.298 0 0 0-.54 0l-.583 1.22a.3.3 0 0 1-.234.168l-1.342.168a.3.3 0 0 0-.251.209.31.31 0 0 0 .084.319l.977.902a.3.3 0 0 1 .092.285l-.253 1.304a.3.3 0 0 0 .06.251.3.3 0 0 0 .234.114q.076 0 .142-.037l1.2-.652a.3.3 0 0 1 .146-.038" />
                                    <g filter="url(#badge_first_rank_svg__e)">
                                        <path fill="#fff" d="m39.24 14.608-1.584-.156c.36-2.004.372-3.492.372-4.764h-6.54v-1.26h8.124v1.068c0 1.356 0 2.88-.372 5.112m-2.34 1.32h3.624V17.2H30.516v-1.272h2.1v-3.492h1.56v3.492h1.176v-3.492H36.9zm7.163-4.8v1.548h4.728v-1.548zm3.156 4.836h4.224v1.284H41.435v-1.284h4.2v-2.028h-3.144V8.164h1.572V9.88h4.728V8.164h1.56v5.772H47.22zm12.3-5.148V9.184h-4.38v1.632zm1.56-2.868v4.116h-7.5V7.948zm-5.989 7.188v1.944h6.156v1.26h-7.74v-3.204zm-2.748-2.196H62.35v1.248h-4.068v1.884h-1.584v-1.884h-4.356zm19.535 1.836-1.584-.18c.42-2.088.444-3.624.444-4.908h-6.444v-1.26h8.028v1.056c0 1.38 0 2.94-.444 5.292m-3.48 1.152h4.884V17.2h-9.996v-1.272h3.528v-3.804h1.584zm11.944-2.283h-2.173l-.012-1.073h1.898q.48 0 .815-.14.34-.147.515-.416.176-.276.176-.662 0-.428-.164-.698a.94.94 0 0 0-.504-.392q-.334-.123-.855-.123h-1.424V17.5h-1.47V8.969h2.894q.702 0 1.254.135.556.135.943.421.393.282.592.715.205.434.205 1.031 0 .528-.252.967a1.9 1.9 0 0 1-.744.71q-.492.275-1.225.327zm-.064 3.855h-2.572l.662-1.166h1.91q.499 0 .832-.164.335-.17.498-.463.17-.3.17-.697 0-.417-.147-.72a1 1 0 0 0-.462-.475q-.317-.17-.827-.17H78.69l.012-1.073h2.15l.334.405q.704.023 1.154.31.458.287.68.744t.223.985q0 .815-.358 1.365a2.2 2.2 0 0 1-1.013.838q-.663.28-1.594.281m6.981.117q-.702 0-1.271-.228a2.8 2.8 0 0 1-.96-.65 2.9 2.9 0 0 1-.604-.98 3.4 3.4 0 0 1-.211-1.212v-.235q0-.744.216-1.347a3.1 3.1 0 0 1 .604-1.031q.387-.434.914-.662a2.8 2.8 0 0 1 1.143-.229q.68 0 1.189.229.51.228.844.644.339.41.504.979.17.567.17 1.253v.604h-4.899v-1.014h3.504v-.111a2 2 0 0 0-.152-.715 1.2 1.2 0 0 0-.416-.539q-.282-.205-.75-.205-.353 0-.627.152-.27.146-.451.428a2.3 2.3 0 0 0-.282.68 3.8 3.8 0 0 0-.093.884v.235q0 .416.11.773.119.352.34.615.224.264.54.417.316.146.72.146.51 0 .909-.205.398-.205.691-.58l.744.72q-.204.3-.533.575a2.7 2.7 0 0 1-.803.44q-.468.17-1.09.17m7.076-1.834a.7.7 0 0 0-.106-.38q-.105-.177-.404-.317-.292-.141-.867-.258a7.5 7.5 0 0 1-.926-.263 3 3 0 0 1-.715-.381 1.6 1.6 0 0 1-.463-.528 1.46 1.46 0 0 1-.164-.703q0-.387.17-.732.17-.346.487-.61a2.4 2.4 0 0 1 .767-.416 3.2 3.2 0 0 1 1.02-.152q.796 0 1.365.27.574.263.879.72.305.45.305 1.02h-1.413a.9.9 0 0 0-.129-.469.9.9 0 0 0-.374-.357 1.3 1.3 0 0 0-.633-.141q-.364 0-.604.117a.83.83 0 0 0-.351.293.75.75 0 0 0-.053.686.7.7 0 0 0 .21.228q.147.1.4.188.257.087.644.17.726.152 1.248.392.526.234.808.61.282.369.282.937 0 .422-.182.773-.176.346-.516.604a2.6 2.6 0 0 1-.814.393q-.469.14-1.055.14-.86 0-1.459-.305-.597-.31-.908-.79a1.87 1.87 0 0 1-.305-1.008h1.366q.023.392.216.627.2.228.493.334.299.1.615.1.381 0 .638-.1a.9.9 0 0 0 .393-.282.67.67 0 0 0 .135-.41m5.405-4.623v1.031h-3.574v-1.03zm-2.543-1.553h1.412v6.141q0 .293.082.451.09.153.24.205.153.053.358.053.147 0 .281-.018a3 3 0 0 0 .217-.035l.006 1.078a4 4 0 0 1-.41.094 3 3 0 0 1-.528.041q-.486 0-.86-.17a1.27 1.27 0 0 1-.587-.568q-.21-.393-.21-1.043zm10.155-.668V17.5h-1.412v-6.885l-2.092.71v-1.167l3.334-1.219z" />
                                    </g>
                                    <defs>
                                        <linearGradient id="badge_first_rank_svg__a" x1="-5" x2="123" y1="28.5" y2="7" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#3853E3" />
                                            <stop offset="1" stop-color="#44D166" />
                                        </linearGradient>
                                        <linearGradient id="badge_first_rank_svg__c" x1="94.202" x2="118.994" y1="21.156" y2="8.782" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#fff" />
                                            <stop offset="1" stop-color="#fff" stop-opacity="0" />
                                        </linearGradient>
                                        <linearGradient id="badge_first_rank_svg__d" x1="80.5" x2="50.251" y1="9.5" y2="48.041" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#fff" />
                                            <stop offset="1" stop-color="#fff" stop-opacity="0" />
                                        </linearGradient>
                                        <filter id="badge_first_rank_svg__e" width="86.835" height="20.392" x="25.516" y="4.948" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                            <feOffset dy="2" />
                                            <feGaussianBlur stdDeviation="2.5" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix values="0 0 0 0 0.157901 0 0 0 0 0.182164 0 0 0 0 0.628608 0 0 0 0.1 0" />
                                            <feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow_6089_938" />
                                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_6089_938" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                <p className={book.rank === 1 && styles.hide}>{book.rank} | {book.rank_last_week === 0 ? "_" : book.rank_last_week}</p>
                                <ul className={styles.tagList}>
                                    {book.buy_links.map((link) => (
                                        <li>
                                            <a href={link.url}>{link.name}</a>
                                        </li>
                                    ))}
                                </ul>
                                <a href={book.amazon_product_url}>{book.title}</a>
                                <p>{book.author} - {book.publisher} - {bookDeatil.bestsellers_date}</p>
                                <p>
                                    <strong>10% </strong>
                                    {book.price}원 | 750P
                                </p>
                                <p>{book.description.slice(0, 150)}...</p>
                                <div>
                                    🍀 9.78 (2,043개의 리뷰) / 고마워요
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}