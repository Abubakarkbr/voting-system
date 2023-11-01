const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;
const db = "mongodb+srv://junior:user123@cluster0.fx2kdph.mongodb.net/vote";
async function main() {
  await mongoose.connect(db);
}

module.exports = main;
