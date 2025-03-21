import express from "express";
import cors from "cors";
import gadgetRoutes from "./src/routes/gadgetRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/gadgets", gadgetRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the IMF Gadget Management System API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
