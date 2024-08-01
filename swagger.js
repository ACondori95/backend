const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "ECOMMERCE API",
    description: "",
  },
  host: "backend-ckbn.onrender.com/",
  schema: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
