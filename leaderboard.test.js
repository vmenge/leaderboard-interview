import { getLeaderboardPositions } from './leaderboard'; 

describe('getLeaderboardPositions()', () => {
    test('#1 - expected leaderboard positions to be correct', () => {
        const expected = [6, 4, 2, 1];

        const leaderboard = [100, 50, 40, 20, 100, 10, 40];
        const playerScores = [5, 25, 50, 120]
        const actual = getLeaderboardPositions(leaderboard, playerScores);

        expect(actual).toEqual(expected);
    });


    test('#2 - expected leaderboard positions to be correct', () => {
        const expected = [6, 5, 4, 2, 1];

        const leaderboard = [90, 80, 75, 90, 60, 100];
        const playerScores = [50, 65, 77, 90, 102];
        const actual = getLeaderboardPositions(leaderboard, playerScores);

        expect(actual).toEqual(expected);
    });

    test('#3 - expected leaderboard positions to be correct', () => {
        const expected = [4, 3, 1];

        const leaderboard = [100, 90, 90, 80];
        const playerScores = [70, 80, 105];
        const actual = getLeaderboardPositions(leaderboard, playerScores);

        expect(actual).toEqual(expected);
    });

    test('#4 - expected original leaderboard to remain unchanged', () => {
        const expected = [100, 50, 50];

        const leaderboard = [100, 50, 50];
        getLeaderboardPositions(leaderboard, [1, 2, 3]);

        expect(leaderboard).toEqual(expected);
    })
})