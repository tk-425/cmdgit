const gradient = require('gradient-string');
const figlet = require('figlet') ;
const { command } = require('./commands');
const { CommandType } = require('../utils/types');

async function logo() {
  const msg = `CMDGIT`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

exports.logo = logo;