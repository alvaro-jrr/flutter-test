function diceNumbersCalculator(dice1: number, dice2: number, dice3: number) {
	const dices = [dice1, dice2, dice3];

	// Verify there's only valid dices
	if (dices.some((dice) => dice < 1 || dice > 6)) {
		throw new Error("Dice can't be less than 1 or bigger than 6");
	}

	// If dices are equal
	if (dice1 === dice2 && dice1 === dice3 && dice2 === dice3) return dice1 * 3;

	// In case only two dices match
	if (dice1 === dice2 || dice1 === dice3) return dice1 * 2;

	if (dice2 === dice3) return dice2 * 2;

	// Return maximum from dices
	return Math.max(...dices);
}
