/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	const dp = new Array(amount + 1).fill(Infinity);
	dp[0] = 0;

	for (let i = 1; i < dp.length; i++) {
		for (const c of coins) {
			if (i - c >= 0) {
				dp[i] = Math.min(dp[i], dp[i - c] + 1);
			}
		}
	}
	return dp[amount] === Infinity ? -1 : dp[amount];
};
