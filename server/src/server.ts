// GET = to search information
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade,tipo mudar dados deu um usuario cadastrado
// PATCH atualizar informação unica de uma entidade
// Delete Deletar informação

import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("Ta rodando");
});
