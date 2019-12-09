const defGetting = { getting: true }

function getUnique(repos, key) {
	return repos
		.map(repo => repo[key])
		.map((value, index, final) => final.indexOf(value) === index && index)
		.filter(value => repos[value])
		.map(value => repos[value])
}

export { defGetting, getUnique }

