const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 8000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors())

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

function savepost(post)
{
  const filePath = 'data.json';

// New JSON object to append
const newData = post;

// Read the existing JSON file
fs.readFile(filePath, 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading the file:', readErr);
    return;
  }

  try {
    // Parse the existing JSON data
    const existingData = JSON.parse(data);

    // Append the new data to the array
    existingData.push(newData);

    // Write the updated data back to the file
    fs.writeFile(filePath, JSON.stringify(existingData, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing to the file:', writeErr);
      } else {
        console.log('Data appended and file updated successfully.');
      }
    });
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
  }
});
}

app.post('/', async(req, res) => {
  console.log("hello ji my name is jassi");
  console.log(req.body);
  savepost(req.body);
  res.json({msg : "post saved successfully"});
});

app.post('/upload', upload.single('image'), (req, res) => {
  console.log("majhfjdhfjd");
  const imagePath = `./images/${Date.now()}_${req.file.originalname}`;
fs.writeFileSync(imagePath, req.file.buffer);
const name = path.basename(imagePath);
res.json({ 
  message: 'Image uploaded successfully',
  name: name
});
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
