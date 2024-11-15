export default function Rating({ rank, lastWeekRank }: { rank: number, lastWeekRank: number }) {
    if (rank === 0 || lastWeekRank === 0) {
        return <p>_</p>
    }
    if (rank - lastWeekRank === 0) {
        return <p>_</p>
    } else if (rank > lastWeekRank) {
        return <p>{rank - lastWeekRank} &darr;</p>
    } else {
        return <p>{lastWeekRank - rank} &uarr;</p>
    }
};