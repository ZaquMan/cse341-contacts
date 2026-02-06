const express = require("express");
const app = express();
const routes = require("./routes");
const mongoDB = require("./database");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

/* ***********************
* Express Error Handler
* Place after all other middleware
*************************/
app.use(async (err, req, res, next) => {
    console.error(`Error at: "${req.originalUrl}": ${err.message}`);
    res.setHeader("Content-Type", "application/json")
    res.status(500).send({ message: "Unable to complete." });
})

mongoDB.initDB((err /*, mongoDB*/) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`application is listening on port ${port} and connected to Mongo`);
        });
    }
});
