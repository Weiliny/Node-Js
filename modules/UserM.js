var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var User = new Schema({
    id    : ObjectId,
    username     : String,
    password      : String
});
module.exports = User;