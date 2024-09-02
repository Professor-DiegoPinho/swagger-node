import { Router } from "express";

const recipesRouter = Router();

/**
   * @openapi
   * '/receitas/{id}':
   *  get:
   *     tags: [Recipes]
   *     summary: Get a specific recipe
   *     parameters:
   *      - name: id
   *        in: path
   *        description: The id of the recipe
   *        required: true
   *     responses:
   *       200:
   *         description: The recipe Information
   *       404:
   *         description: Recipe not found
*/
recipesRouter.get("/recipes/:id", (req, res) => {
  return res.send({
    id: 1,
    title: "miojo",
    ingredients: "miojo",
    preparation: "miojo"
  })
});

/**
 * @openapi
 * /recipes:
 *   post:
 *     summary: Cria uma nova receita
 *     tags: [Recipes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Recipe'
 *     responses:
 *       200:
 *         description: Receita criada com sucesso
 *       422:
 *         description: Erro de validação
 *       409:
 *         description: Já existe uma receita com este título
 */

recipesRouter.post("/recipes", (req, res) => {
  res.sendStatus(201);
});

export default recipesRouter;