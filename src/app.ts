import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { Request, Response, NextFunction } from "express";
import { sequelize } from "./utils/database";
import userRouter from "./routes/user";

const app = express();
const port = process.env.PORT || 8080;

//-- CORS.
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

//--

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api_v1", userRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      `Connection has been established successfully at port: ${port}
      `
    );
    app.listen(port);
  })
  .catch(() => {
    console.error("Unable to connect to the database:");
  });
