const { select } = require('@inquirer/prompts');
const { userInput } = require('./userInput');
const { displayInput } = require('../utils/displayInput');

async function showBranches(branches) {
	await select({
		message: `Select a branch:`,
		choices: branches
	}).then(res => {
		if (res === '-b') {
			userInput('Enter a new branch name:');
		} else {
			displayInput('Selected branch:', res);
		}
	});
}

exports.showBranches = showBranches;
