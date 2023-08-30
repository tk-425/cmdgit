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

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	debug && log(flags);

	await logo();
	
	await command(CommandType.showCurrent);
	await command(CommandType.newBranch);
})();
