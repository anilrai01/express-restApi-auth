const router = require("express").Router();
const Post = require("../models/Posts");
const { registerPostValidate } = require("../models/Validation");

router.get("/", async (req, res) => {
  try {
    const allPost = await Post.find();
    res.send(allPost);
  } catch (err) {
    res.send({ message: err });
  }
});

router.get("/:id", (req, res) => {
  res.send("You are at Post " + req.params.id);
});

router.post("/", async (req, res) => {
  const post = new Post({
    post_title: req.body.post_title,
    post_desc: req.body.post_desc,
  });

  const { error } = registerPostValidate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // const post = await post.save();
  // res.send(post);
  const newPost = await post.save();
  res.send(newPost);
});

module.exports = router;
