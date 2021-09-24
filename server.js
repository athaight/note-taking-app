console.clear();
const express = require('express');
const path = require('path');
const fs = require('fs/promises');
// const uuid = require('./helpers/uuid');
const app = express();
const PORT = process.env.PORT || 3023;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Retreives the home page
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
// Retreives the notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);
// Retreives the note database and connects to notes page
app.get("/api/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "db/db.json"))
);
// Note is saved to database with randomized id 
app.post("/api/notes", async (req, res) => {
  const dataToRead = await fs.readFile("./db/db.json", "utf8");
  const parsedData = JSON.parse(dataToRead);
    parsedData.push({
      ...req.body,
      id: Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .toString(1),
  });

  const stringifiedData = JSON.stringify(parsedData);
  await fs.writeFile("./db/db.json", stringifiedData);
  res.send();
});
// If a note is present with id and delete button is pressed note is removed from database 
app.delete("/api/notes/:id", async (req, res) => {
  const dataToRead = await fs.readFile("./db/db.json", "utf8");
  const parsedData = JSON.parse(dataToRead);
  const notes = parsedData.filter((note) => note.id !== req.params.id);
  const stringifiedData = JSON.stringify(notes);

  await fs.writeFile("./db/db.json", stringifiedData);
  res.send("Deleted Note!");
});

// Projects to selected PORT (in this case PORT:3023)
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
