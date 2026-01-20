const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
        title: "Contact Management API",
        description:
            "This API allows for the creation, retrieval, updating, and deletion of contacts."
    },
    host: "contacts.cse341.zaquman.com",
    schemes: ["https"]
};

const outputFile = "./swagger-output.json";
const routes = ["./routes/index.js"];

swaggerAutogen(outputFile, routes, doc);
