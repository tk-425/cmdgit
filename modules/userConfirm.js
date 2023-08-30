const { confirm } = require('@inquirer/prompts');

async function userConfirm(type) {
	await confirm({
		message: 'Confirm? ',
		default: false
	}).then(res => {
		if (res) {
			console.log('CONFIRMED');
		} else {
			console.log('CANCELLED');
		}
	});
}

exports.userConfirm = userConfirm;
