// this is a standard MERN server setup, remember to include  "type": "module" in the package.json file

import express from "express";
import mongoose from "mongoose"; // Data Base
import cors from "cors"; // for Cross-Origin
import postsRoutes from "./routes/posts.js"; // when using import, MUST include the .js file extension
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "30mb" })); // To parse the incoming requests with JSON payloads
app.use(cors());

// the "/posts" here sets the base URL from this route. SO the route "/" within postsRoutes MUST be reached by visiting "/posts"
// a route in postsRoutes with get "travel" therefore must be reached by visiting "posts/tarvel"
app.use("/posts", postsRoutes);

// mongodb cloud atlas - credentials must be safely stored before production
//const CONNECTION_URL =
("mongodb+srv://cycle_admin:Admin@Leov95@cluster0.n9jii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
