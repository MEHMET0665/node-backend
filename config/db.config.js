const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://meavci:ZV9c7m9aSpltSunQ@cluster0.5uqz0.mongodb.net/node-project?retryWrites=true&w=majority', {useNewUrlParser: true}, 
	(err) => {
	if (!err) {
		console.log('Successful connection... ')
	} else {
		console.log('An error occured. Details: ' + err)
	} });

  
  module.exports = mongoose;
