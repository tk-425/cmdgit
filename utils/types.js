const CommandType = {
	showCurrent: 'git branch --show-current',
	newBranch: 'git branch -a'
};

const NameType = {
	branch: 'new_branch_name',
	msg: 'message'
};

const QuestionType = {
	currentBranch: 'Current branch:',
	selectBranch: 'Select a branch (* marks the current branch):'
};

module.exports = {
	CommandType,
	NameType,
	QuestionType
};
