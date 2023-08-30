const { input } = require('@inquirer/prompts');
const { displayInput } = require('../utils/displayInput');

async function userInput(msg) {
	await input({
		message: msg
	}).then(res => {
		const selected = res.replace(' ', '-').trim();
		displayInput('New branch name:', selected);
	});
}

exports.userInput = userInput;
