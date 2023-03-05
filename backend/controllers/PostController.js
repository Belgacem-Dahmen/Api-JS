

const PostModel = require('../models/post.model')



module.exports.getAllPosts= async (req,res) => {
    const posts = await PostModel.find();

    if(posts){
        res.status(200).json(posts);
    }else{
        res.status(400).json({
            message :"Aucun post dans la base"
        })
    }
    

};


module.exports.createPost= async (req,res) => {
    const post = await PostModel.create({
        message : req.body.message,
        author: req.body.author,
        title : req.body.title,
    })
    res.status(200).json(post);

};

module.exports.getPost= async (req,res) => {
    const post = await PostModel.findById(req.params.id)
    if (!post){
        res.json({message : " id n'existe pas"});
        
    }
    else {
        res.status(200).json(post);
    }
    

};