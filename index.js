if (process.env["DEVELOPMENT"]) {
    require("dotenv").config();
}

const express = require("express");
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env["MONGO_URI"], { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connected to MongoDB!");
    }

    const KaleDB = client.db("KaleDB");
    const pasteCollection = KaleDB.collection("pasteCollection");
});

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.listen(8080, () => {
    console.log("Listening on port 8080\nhttp://localhost:8080");
});
