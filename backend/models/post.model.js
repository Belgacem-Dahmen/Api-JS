const mongoose = require('mongoose');
const postSchema = mongoose.Schema({
    title :{
        type : String,
        required: true,
    },
    message : {
        type : String,
        required: true,
    }, 
    author : {
        type : String,
        required: true,
    },
},{
    timestamps : true,
})


module.exports = mongoose.model('post',postSchema);