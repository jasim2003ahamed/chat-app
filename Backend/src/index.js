// import express from 'express'
// import dotenv from "dotenv"
// import authRoutes from "./routes/authRoutes.js"
// import messageRoutes from "./routes/messageRoutes.js"
// import cookieParser from "cookie-parser";
// import cors from 'cors'
// import { connectDb } from "./lib/db.js"
// import { app, server } from "./lib/socket.js";
// import path from "path";



// dotenv.config()

// const PORT = process.env.PORT
// const __dirname = path.resolve();

// // const app = express()
// app.use(express.json())
// app.use(cookieParser());

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// app.use("/api/auth", authRoutes)
// app.use("/api/messages", messageRoutes)

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../Frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
//   });
// }

// server.listen(PORT, () => {
//     console.log("server is running Port :" + PORT)
//     connectDb()
// })

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// import path from "path";

import { connectDb } from "./lib/db.js";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
// const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173","https://frontend-u50c.onrender.com"],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/api/ping", (req, res) => {
  res.status(200).send("pong");
});

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../Frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
//   });
// }


server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDb();
});