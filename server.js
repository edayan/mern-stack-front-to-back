const express = require("express");
const connectDb = require("./config/db");

const app = express();

connectDb();

app.get(`/`, (req, res) => res.send(`Api Running`));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port:${PORT}`));
