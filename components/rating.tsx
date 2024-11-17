import styles from "../styles/rating.module.css";
interface RatingProps {
    rank: number;
    lastWeekRank: number;
}

export default function Rating({ rank, lastWeekRank }: RatingProps) {
    const isNotChange = rank === 0 || lastWeekRank === 0 || rank === lastWeekRank;
    const isDecreased = rank > lastWeekRank;
    const difference = Math.abs(rank - lastWeekRank);

    if (isNotChange) {
        return (
            <span className={styles.ratingFlex}>
                _
            </span>
        );
    }

    return (
        <span className={styles.ratingFlex}>
            {isDecreased ?
                //increase
                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24">
                    <path d="M15.5 14.5C15.4015 14.5005 15.3038 14.4813 15.2128 14.4435C15.1218 14.4057 15.0392 14.3501 14.97 14.28L11.97 11.28L8.96999 14.28C8.82472 14.3502 8.6607 14.3716 8.50227 14.3411C8.34385 14.3107 8.19947 14.23 8.09056 14.111C7.98165 13.9919 7.91402 13.841 7.89771 13.6805C7.88139 13.52 7.91726 13.3585 7.99999 13.22L11.5 9.72001C11.6406 9.57956 11.8312 9.50067 12.03 9.50067C12.2287 9.50067 12.4194 9.57956 12.56 9.72001L16.06 13.22C16.2004 13.3606 16.2793 13.5513 16.2793 13.75C16.2793 13.9488 16.2004 14.1394 16.06 14.28C15.9873 14.3539 15.8998 14.4116 15.8034 14.4495C15.7069 14.4874 15.6035 14.5046 15.5 14.5Z" fill="#df1d1d" />
                </svg>
                :
                //decrease
                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24">
                    <path d="M12 14.5C11.9015 14.5005 11.8038 14.4813 11.7128 14.4435C11.6218 14.4057 11.5392 14.3501 11.47 14.28L8 10.78C7.90861 10.6391 7.86719 10.4715 7.88238 10.3042C7.89756 10.1369 7.96848 9.97954 8.08376 9.85735C8.19904 9.73515 8.352 9.65519 8.51814 9.63029C8.68428 9.6054 8.85396 9.63699 9 9.72003L12 12.72L15 9.72003C15.146 9.63699 15.3157 9.6054 15.4819 9.63029C15.648 9.65519 15.801 9.73515 15.9162 9.85735C16.0315 9.97954 16.1024 10.1369 16.1176 10.3042C16.1328 10.4715 16.0914 10.6391 16 10.78L12.5 14.28C12.3675 14.4144 12.1886 14.4931 12 14.5Z" fill="#0073cb" />
                </svg>
            }
            <span>{difference}</span>
        </span>
    );
}