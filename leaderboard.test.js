import { getLeaderboardPositions } from './leaderboard'; 

describe('getLeaderboardPositions()', () => {
    test('test case #1', () => {
        const expected = [6, 4, 2, 1];

        const leaderboard = [100, 100, 50, 40, 40, 20, 10];
        const playerScores = [5, 25, 50, 120]
        const actual = getLeaderboardPositions(leaderboard, playerScores);

        expect(actual).toEqual(expected);
    });


    test('test case #2', () => {
        const expected = [6, 5, 4, 2, 1];

        const leaderboard = [100, 90, 90, 80, 75, 60];
        const playerScores = [50, 65, 77, 90, 102];
        const actual = getLeaderboardPositions(leaderboard, playerScores);

        expect(actual).toEqual(expected);
    });

    test('test case #3', () => {
        const expected = [4, 3, 1];

        const leaderboard = [100, 90, 90, 80];
        const playerScores = [70, 80, 105];
        const actual = getLeaderboardPositions(leaderboard, playerScores);

        expect(actual).toEqual(expected);
    });
})