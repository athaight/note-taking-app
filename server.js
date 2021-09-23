console.clear();
const express = require('express');
const path = require('path');
const fs = require('fs/promises');
// const uuid = require('./helpers/uuid');
const app = express();
const PORT = process.env || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.get("/api/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/db/db.json"))
);

app.get('/api/notes', (req, res) => {
  res.status(200).json(`${req.method} request received to get reviews`);
});

app.post('/api/notes', async (req, res) => {
  console.info(`${req.method} request received to add a note`);
  const {title, text} = req.body;
  const dataToRead = await fs.readFile("./db/db.json", "utf8");

  const parsedData = JSON.parse(dataToRead);

  parsedData.push(req.body);

  const stringifiedData = JSON.stringify(parsedData);

  await fs.writeFile("./db/db.json", stringifiedData);
  res.send("whatever");
});



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
