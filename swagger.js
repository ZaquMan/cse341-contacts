const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Contact Management API",
        description:
            "This API allows for the creation, retrieval, updating, and deletion of contacts."
    },
    host: "localhost:3000",
    schemes: ["http"]
};

const outputFile = "./swagger-output.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
