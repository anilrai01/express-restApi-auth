const express = require("express");
const app = express();
const postRoute = require("./routes/posts");

//Middlewares
app.use(express.json());
//Route middleware
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
  res.send("I am at Home API");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Listening to Post: " + PORT);
});
