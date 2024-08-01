const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "ECOMMERCE API",
    description: "",
  },
  host: "localhost:5000",
  schema: ["http"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
