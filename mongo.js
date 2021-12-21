const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true});

const cat = mongoose.model('Cat', { 
    name: String,
    age: Number,
    gender: String,
},'Cat');

module.exports = {
    cat
};
