import express from "express";
import "express-async-errors";
import cors from "cors";

const app = express();
app.use(cors);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello people!</h1>");
});

app.get("/alunos", (req, res) => {
  res.json([
    {
      aluno: "Bia",
      idade: 13,
      classe: "Oitavo ano",
    },
    {
      aluno: "Gui",
      idade: 14,
      classe: "Nono ano",
    },
  ]);
});

app.listen(3000, () => {
  console.log("Listen on port 3000...");
});
