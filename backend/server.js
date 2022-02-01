const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path = require("path");
const app = express();
dotenv.config();
connectDb();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

//---------------------deployment------------------------

__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api is running..");
  });
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on PORT ${PORT}`));
