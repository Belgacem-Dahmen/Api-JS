const express = require('express');
const { createPost, getAllPosts,getPost } = require('../controllers/PostController');
const router = express.Router();

//premiere route
router.get("/", getAllPosts);

router.post("/", createPost);

router.get("/:id", getPost);

router.put("/:id", (req,res)=>{
    res.json({
        message : req.params.id,
        actions : "Mise a jour de ce post"
    })
});

router.delete("/:id", (req,res)=>{
    res.json({
        message : req.params.id,
        actions : "Supression de ce post"
    })
});

module.exports = router