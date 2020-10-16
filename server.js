// server.js

/**
 * Required External Modules
 */

const express = require ("express");
const path = require ("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */
app.use(express.json())
/**
 * Routes Definitions
 */
const items = [];
let id = 0;


app.get("/", (req, res) => {
    res.status(200).send("TO DO App");
});

app.get('/api/items', (req, res, next) => {
    res.json(items);
});

app.post('/api/items', (req, res, next) => {
	// something goes in here
  console.log('req.body', req.body);
  if (req.body.item) {
	  id = id + 1;
    const newItem = {
	    id: id,
	    item: req.body.item,
      completed: false
    };
    items.push(newItem);
    res.json(newItem);
  } else {
    res.status(400).json({error: "item needs a description"});
  }
});


/**
 * Server Activation
 */

 app.listen(port, () => {
     console.log(`Listening to requests on http://localhost:${port}`);
 })