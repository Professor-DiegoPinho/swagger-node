import dotenv from "dotenv";
dotenv.config();

const swaggerOptions = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Exemplo de API",
      version: "0.1.0",
      description: "Descrição da API",
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
      },
    ],
  },
  apis: ["./src/*/*.js"],
};

export default swaggerOptions;