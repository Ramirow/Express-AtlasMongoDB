const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//RETRIEVE ALL POSTS
router.get('/',async (req,res) => {
  try {
      const posts = await Post.find();
      res.json(posts);
  }catch(err){
   res.json({msg:err})

  }          



});

// POST JSON FROM POSTMAN  
router.post('/',async (req,res)=> {
   console.log('Request Body',req.body) 
   const post = new Post({
    title:req.body.title,
    description:req.body.description
});
try {
const savedPost = await post.save()
res.json(savedPost);
console.log('DATA',savedPost)    
}  
catch(err){
     res.json({message:err});  
}
});     

//SPECIFIC POST 
router.get('/:postId',async (req,res) => {
  try {  
 const post = await Post.findById(req.params.postId);
 res.json(post);
  }catch (err){
   res.json({msg:err})
}
});

//DELET SPECIFIC POST 
router.delete('/:postId',async (req,res) => {
    try {  
   const removedPost = await Post.remove({_id:req.params.postId});
   res.json(removedPost);
    }catch (err){
     res.json({msg:err})
  }
  });

// UPDATE SPECIFIC POST
router.patch('/:postId',async (req,res) => {
try {  
const updatedPost = await Post.updateOne({_id:req.params.postId},{$set:
{title:req.body.title,description:req.body.description}
});
res.json(updatedPost);
}catch (err){
    res.json({msg:err})
}
});  



 router.get('/spec',(req,res) => {
    res.send("We are at spec");     
 }) 

 module.exports = router




