import express from "express";

const app = express();

app.get("/users", (req, res) => {
    return res.send("Hello friend");
});

app.listen(3333, () => {
    console.log("Ta rodando");
});
