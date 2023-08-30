async function getBranches(data) {
	let splitData = data.split(' ');
	let result = [];

	result.push({
		value: '-b'
	});

	for (const element of splitData) {
		const b = element.replace(/\n/g, '').replace('*', '');

		if (b !== '*' && !b.includes('remotes') && b !== '') {
			result.push({
				value: b
			});
		}
	}

	return result;
}

exports.getBranches = getBranches;
