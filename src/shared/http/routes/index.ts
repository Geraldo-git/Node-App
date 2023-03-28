import { Router } from "express";
const routes = Router();

routes.get("/", (req, res) => {
  res.send("<h1>Hello people!</h1>");
});

routes.get("/alunos", (req, res) => {
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

export { routes };
