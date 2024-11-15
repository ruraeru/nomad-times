export default function Rating({ className, rank, lastWeekRank }: { rank: number, lastWeekRank: number, className: string }) {
    if (rank === 0 || lastWeekRank === 0) {
        return <span>_</span>
    }
    if (rank - lastWeekRank === 0) {
        return <span>_</span>
    } else if (rank > lastWeekRank) {
        return <span>&darr; {rank - lastWeekRank}</span>
    } else {
        return <span>&uarr; {lastWeekRank - rank}</span>
    }
};