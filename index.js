function ignoreOrderCompare(a, b) {
	if (a.length !== b.length) return false
	const unique = new Set([...a, ...b]); // make set of unique elements
	for (let x of unique) {
		const c1 = a.filter(e => e === x).length
		const c2 = b.filter(e => e === x).length

		if (c1 !== c2) return false
	}
	
	return true
}

const a = [1,2,3]
const b = [3,1,2]
const c = [1,2,4]

console.log(ignoreOrderCompare(a, b)) // true
console.log(ignoreOrderCompare(a, c)) // false
