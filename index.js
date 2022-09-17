const express = require("express");
const { MongoClient } = require('mongodb');

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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

app.listen(8080, () => {
    console.log("Listening on port 8080\nhttp://localhost:8080");
});
