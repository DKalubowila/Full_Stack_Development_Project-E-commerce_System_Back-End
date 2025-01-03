const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
const host = "localhost";
const mongoose = require("mongoose");
const router = require("./router");

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://hesh:tharindu@cluster0.1wsjk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to the database!");
  } catch (error) {
    console.log("Could not connect to the database!", error);
  }
};

connect();

const server = app.listen(port, host, () => {
  console.log(`Express is running on port ${server.address().port}`);
});

app.use("/api", router);
