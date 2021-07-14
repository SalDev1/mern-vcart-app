import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routers/products.js";
import userRoutes from "./routers/user.js";
import dotenv from "dotenv";

var app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/products", productRoutes);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json("Welcome to the VCART API.");
});

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server is listening at PORT ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });

mongoose.connection.on("connected", () => {
  console.log("Mongodb is connected");
});

mongoose.set("useFindAndModify", false);
