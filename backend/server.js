// Import Packages
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const BlogRoutes = require("./routes/blog");

//App
const app = express();

//MiddleWares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

//cors
if (process.env.NODE_ENV == "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// DB
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("DB connected Successfuly"));

app.use("/api", BlogRoutes);
//Routes
app.get("/", (req, res) => {
  res.json({ Name: "Asem" });
});


//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});
