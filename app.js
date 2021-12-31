import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
// Import Routes
import productRoutes from "./routes/products.js";
import companyRoutes from "./routes/companies.js";
import quotationRoutes from "./routes/quotation.js";
import dotenv from "dotenv";
dotenv.config();
// App
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/api/product", productRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/quotation", quotationRoutes);
app.get("/abc", (req, res) => {
  res.json("asdf");
});

// Listeners
mongoose
  .connect(
    "mongodb+srv://marwan:asdf1234@cluster0.5mgpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connected"));
app.listen(PORT, () => console.log(`Example app listening on port 8000!`));
