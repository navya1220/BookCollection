
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const routes = require("./routes/bookRoutes")

dotenv.config();



const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/books", routes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
