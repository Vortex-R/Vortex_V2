import path from "path";
const __dirname = path.resolve();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();
import userRoute from "./routes/user.js";
import contactRoute from "./routes/contact.js";
import eventRoute from "./routes/event.js";
import organizerPRoute from "./routes/organizerProfile.js";
import userPRoute from "./routes/userProfile.js";
import dotenv from "dotenv";
import { auth, organizer } from "./middleware/auth.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
app.set("port", PORT);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api/user", userRoute);
app.use("/api/contact", contactRoute);
app.use("/api/event", eventRoute);
// app.use("/api/organizerP", auth, organizerPRoute);
// app.use("/api/userP", auth, userPRoute);

// Serve Old frontend
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.resolve(process.cwd(), "client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(process.cwd(), "client/build/index.html"));
//   });
// } else {
//   app.get("/", (req, res) => res.send("Please set to production"));
// }


// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

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
