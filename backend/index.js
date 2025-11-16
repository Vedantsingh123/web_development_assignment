import express, { json } from "express";
const app = express();
import cors from "cors";
import connectDB from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import formRoutes from "./routes/formRoutes.js";
import responseRoutes from "./routes/responseRoutes.js";


app.use(
  cors({
    origin: "*", // Whitelist a specific origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Define allowed HTTP methods
  })
);
app.use(json({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hey we are live ✨");
});

// All available rsoutes
app.use("/auth", authRoutes); // For authentication routes
app.use("/user", userRoutes);
app.use("/form", formRoutes);
app.use("/response", responseRoutes);

connectDB().then(() => {
  console.log("DB connection established");
  app.listen(5000, () => {
    console.log("Server listening on port 5000");
  });
});
