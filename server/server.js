import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cloudinary from "cloudinary";

const app = express();

app.use(cors());

dotenv.config();
connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
  })
);

app.use("/api/v1", userRoutes);

// ------------------------------------------------------------------------

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
});

app.get("/", (req, res) => {
  res.send("Server is working");
});
