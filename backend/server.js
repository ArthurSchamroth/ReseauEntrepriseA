const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(require("body-parser").json())

const routes = require("./routes/user.route")(app);

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`the server is running on ${PORT}`);
});

 