import dotenv from "dotenv";
import { Client } from "@line/bot-sdk";
import express from "express";

dotenv.config();
const app = express();
// const client = new Client({
//     channelAccessToken: "",
//     channelSecret: "",
// });

app.post("/webhook", (req, res) => {
    const event = req.body.events[0];
    const { replyToken, message } = event;
    res.json();
});

app.listen(3000);
