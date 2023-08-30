const chalk = require('chalk');

function displayInput(message, branch) {
	console.log(
		`\n${chalk.bold.blue('➡')} ${chalk.bold.green(
			message
		)} ${chalk.underline(branch)}`
	);
}

exports.displayInput = displayInput;
