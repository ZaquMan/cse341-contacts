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

mongoDB.initDB((err /*, mongoDB*/) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`application is listening on port ${port} and connected to Mongo`);
        });
    }
});
