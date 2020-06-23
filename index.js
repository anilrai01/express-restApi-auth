const express = require("express");
const app = express();
const postRoute = require("./routes/posts");
require("dotenv").config();
const mongoose = require("mongoose");

//Middlewares
app.use(express.json());

//DB Connection
mongoose.connect(process.env.DB_SERVER, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => console.log("Connected to Local MongoDB Successfully"))
  .on("error", () => console.log("Error establishing Database"));

//Route middleware
app.use("/api/posts", postRoute);
app.get("/", (req, res) => {
  res.send("I am at Home API");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Listening to Post: " + PORT);
});
