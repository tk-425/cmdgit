const { exec } = require('node:child_process');
const { getBranches } = require('./getBranches');
const { showBranches } = require('./showBranches');
const { CommandType } = require('../utils/types');
const { displayInput } = require('../utils/displayInput');
const { userConfirm } = require('./userConfirm');

async function command(cmd) {
	exec(cmd, (err, stdout, stderr) => {
		if (err) {
			console.log('error: ', err.message);
			return;
		}

		if (stderr) {
			console.log(stderr);
			return;
		}

		switch (cmd) {
			case CommandType.gitInit:
				userConfirm(CommandType.gitInit);
				break;

			case CommandType.newBranch:
				getBranches(stdout).then(result => {
					showBranches(result);
				});
				break;

			case CommandType.showCurrent:
				displayInput('Current branch:', stdout);
				break;

			default:
				console.log('DEFAULT ANSWER');
		}
	});
}

exports.command = command;
