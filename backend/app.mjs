import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.mjs";
import cookieParser from "cookie-parser";
import { requireAuth, checkUser } from "./middleware/authMiddleware.mjs";

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// database connection
const dbURI =
  "mongodb+srv://jahongir:jahon12345@cluster0.8cagjv1.mongodb.net/Users?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(5500))
  .then(() => console.log("running on http://localhost:5500"))
  .catch((err) => console.log(err));

// routes
app.get("*", checkUser);
app.use(authRoutes);
