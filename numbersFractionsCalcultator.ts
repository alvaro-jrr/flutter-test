function numbersFractionsCalculator(array: number[]) {
	const length = array.length;

	// In case array is empty, then there's no internal fraction
	if (!length) {
		return {
			positives: 0,
			negatives: 0,
			zeros: 0,
		};
	}

	// Count positives
	const positivesCount = array.filter((number) => number > 0).length;
	const negativesCount = array.filter((number) => number < 0).length;
	const zerosCount = length - positivesCount - negativesCount;

	// Return the fraction for each number type
	return {
		positives: positivesCount / length,
		negatives: negativesCount / length,
		zeros: zerosCount / length,
	};
}
