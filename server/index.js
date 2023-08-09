const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dataFilePath = path.join(__dirname, "data.json");

app.post("/signup", async (req, res) => {
  const newResponse = req.body;
  if (
    !newResponse ||
    !newResponse.name ||
    !newResponse.email ||
    !newResponse.password
  ) {
    return res.json({ message: "All fields are required" });
  }

  // Read existing data from the file
  const rawData = await fs.readFile(dataFilePath, "utf8");

  // Parse the existing data if available, otherwise use an empty array
  if (rawData) {
    existingData = JSON.parse(rawData);
  } else {
    existingData = [];
  }

  // Append the new response to the data array
  existingData.push(newResponse);

  // Write the updated data back to the file
  await fs.writeFile(dataFilePath, JSON.stringify(existingData));

  res.json({ message: "Data send successfully." });
});

app.get("/users", async (req, res) => {
  try {
    // Read data from the file
    const rawData = await fs.readFile(dataFilePath, "utf8");

    // Parse the data and send it back as a response
    const userData = JSON.parse(rawData);
    res.json(userData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while processing the request." });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
