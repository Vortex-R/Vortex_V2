import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import { auth } from "./middleware/auth.js";
import contactRoute from "./routes/contact.js";
import eventRoute from "./routes/event.js";
import organizerPRoute from "./routes/organizerProfile.js";
import {planificationRouter} from "./routes/planification.js";
import userRoute from "./routes/user.js";
import userPRoute from "./routes/userProfile.js";
const __dirname = path.resolve();
dotenv.config();

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
app.set("port", PORT);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.json());
app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/contact", contactRoute);
app.use("/api/event", eventRoute);
app.use("/api/organizerP", auth, organizerPRoute);
app.use("/api/userP", auth, userPRoute);
app.use("/api/planifications", planificationRouter);


// Serve Old frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(process.cwd(), "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "client/build/index.html"));
  });
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

// Serve frontend
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => res.send("Please set to production"));
// }

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
