const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const cors = require("cors");
const db = require("./db");
const port = process.env.DB_PORT || 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// middleware
app.use(cors());
app.use(express.json());

// app.use(express.static("public"))
app.use(express.static("../client/build"))
app.get('/', express.static('public'))

//ROUTES//

//create an agent
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

//get all addagents
app.get('/addagents/:agency', db.getAddAgents)

app.listen( 5000, () => {
    console.log(`Express server has started on port ${port}. Open http://localhost:${port} to see results`);
});

