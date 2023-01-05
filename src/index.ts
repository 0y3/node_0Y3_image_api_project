import express, { Express } from "express";
import routes from "./routes/api/indexroutes";

const app: Express = express();
const port = 2130;

app.use("/api", routes);

app.listen(port, () => {
	console.log(`server started at http://localhost:${port}/api`);
});
