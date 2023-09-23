import "dotenv/config";
import { app } from "@/app";
import { magenta } from "colorette";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("-".repeat(80) + "\n");
  console.log(magenta(`Server is running on http://localhost:${PORT} \n`));
  console.log("-".repeat(80) + "\n");
});
