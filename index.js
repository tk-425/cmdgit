#!/usr/bin/env node

/**
 * cmdgit
 * CLI for git
 *
 * @author kt425
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const { command } = require('./modules/commands');
const { logo } = require('./modules/logo');
const { CommandType } = require('./utils/types');
const { select } = require('@inquirer/prompts');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;
const reStart = true;

async function start() {
	await select({
		message: 'Select a choice',
		choices: [
			{
				name: 'Initialize',
				value: CommandType.gitInit
			},
			{
				name: 'Current Branch',
				value: CommandType.showCurrent
			},
			{
				name: 'Change Branch',
				value: CommandType.newBranch
			},
						{
				name: 'Menu',
				value: CommandType.menu
			},
			{
				name: 'Exit',
				value: CommandType.exit
			},
		]
	}).then(res => {
		switch (res) {
			case CommandType.gitInit:
				command(CommandType.gitInit);
				break;
			case CommandType.newBranch:
				command(CommandType.newBranch);
				break;
			case CommandType.showCurrent:
				command(CommandType.showCurrent);
				break;
			case CommandType.menu:
				start();
				break;
			case CommandType.exit:
				process.exit(0);
		}
	});
}

exports.start = start;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	await start();
})();
