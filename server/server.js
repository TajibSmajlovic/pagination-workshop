const express = require("express");
const mongoose = require("mongoose");

const productRoutes = require("./routes/ProductRoutes");
const utils = require("./utils/seed");

const cors = require("cors");
const server = express();

//middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/api/products", productRoutes);

//configure mongoose
mongoose
  .connect("mongodb://localhost/Product", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

//start the server
server.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});

// seed the database
utils.seedDatabase().then(() => {
  console.log("Database seeded");
});
