const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "data/images");
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + "-" + file.originalname);
  },
});

app.use(express.json());
app.use(cors());
app.use(multer({ storage }).single("image"));

app.post("/upload", async (req, res) => {
  try {
    res.status(200).json({ msg: "Ok" });
  } catch (error) {
    console.error(error.messge);
    res.status(400).json({ msg: "Error" });
  }
});

app.listen("5000", () => console.log(`Server up and running on port 5000`));
