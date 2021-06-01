const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");

app.use(express.json());
app.use(cors());
app.use(multer({ dest: "data" }).single("image"));

app.post("/upload", async (req, res) => {
  try {
    res.status(200).json({ msg: "Ok" });
  } catch (error) {
    console.error(error.messge);
    res.status(400).json({ msg: "Nok" });
  }
});

app.listen("5000", () => console.log(`Servr up and running on port 5000`));
