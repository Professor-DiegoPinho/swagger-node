import joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Recipe:
 *       type: object
 *       required:
 *         - title
 *         - ingredients
 *         - preparation
 *       properties:
 *         title:
 *           type: string
 *         ingredients:
 *           type: string
 *         preparation:
 *           type: string
*/

const receitaSchema = joi.object({
  title: joi.string().required(),
  ingredients: joi.string().required(),
  preparation: joi.string().required()
});

export default receitaSchema;