/**
 * Calculates the stopwatch string given the time (ms)
 *
 * @param {number} time the time in ms
 * @param {boolean} [condensed=false] the format of string to show
 * @return {string} The formatted time
 */
function formattedTime(time, condensed = false) {
	if (!time) {
		return condensed ? '--:--' : '-- : --'
	}

	const seconds = Math.floor((time / 1000) % 60)
	const minutes = Math.floor((time / (1000 * 60)) % 60)
	const hours = Math.floor((time / (1000 * 60 * 60)) % 24)

	return [
		hours,
		minutes.toString().padStart(2, '0'),
		seconds.toString().padStart(2, '0'),
	].filter(num => !!num).join(condensed ? ':' : ' : ')
}

export {
	formattedTime,
}
