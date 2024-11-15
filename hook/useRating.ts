export const useRating = (rank: number, lastWeekRank: number) => {
  if (rank - lastWeekRank === 0) {
    return ["_", null];
  } else if (rank > lastWeekRank) {
    return [rank - lastWeekRank, false];
  } else {
    return [lastWeekRank - rank, true];
  }
};
