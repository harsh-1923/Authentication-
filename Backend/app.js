const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors());

app.use(cookieParser());
app.use(express.json());

const url = require("./env").url;
const PORT = 4000;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected, connected"))
  .catch((err) => {
    console.log(err);
  });

const userRouter = require("./routes/User");
app.use("/user", userRouter);

app.listen(PORT, () => console.log(`Server on at ${PORT}`));
