const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require("cors");
const db = require("./db");
const port = process.env.PORT || 5000;
const staticPath = path.join(__dirname, '../client/build')

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(staticPath))

// ROUTES

// create an agent
app.post("/agent", db.createAgent)

//get all agents
app.get('/agents', db.getAgents)

//get an agent
app.get('/agent/:id', db.getAgentById)

//update an agent
app.put('/agent/:id', db.updateAgent)

//delete an agent
app.delete('/agent/:id', db.deleteAgent)

//get all videos
app.get('/videos', db.getVideos)

//get all faqs
app.get('/fax', db.getFAQs)

//get all addagents
app.get('/addagents/:agency', db.getAddAgents)

app.get('*', (req, res) => {
  res.sendFile(staticPath + "/index.html");
});

app.listen( port, () => {
    console.log(`Express server has started on port ${port}. Open http://localhost:${port} to see results`);
});

