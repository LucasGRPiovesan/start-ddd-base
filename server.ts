import express from "express";
import router from "./src/infra/http/routes/router";
import dotenv from 'dotenv';

const app = express();
const morgan = require('morgan');

dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(morgan('dev'));

app.use("/api", router);

app.listen(port, () => {
  console.log(`🔗 http://localhost:${port}/api`);
  console.log(`🚀 Server running on port ${port}`);
})

app.on('error', (error:any) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${port} requires elevated privileges`);
      process.exit(1);

    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use`);
      process.exit(1);

    default:
      throw error;
  }
});

export default app;
