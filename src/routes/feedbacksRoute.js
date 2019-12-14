const express = require("express")
const router = express.Router()
const controller = require("../controllers/feedbacksController")
const authMiddleware = require('../middleware/auth')

// apidoc -i ./src

/**
 * @api {get} /feedbacks
 * @apiName GetTodos
 * @apiGroup 1. Busca Feedbacks
 *
 * @apiSuccess {String} _id ID do banco de dados MongoDB
 * @apiSuccess {String} feedback Texto do cliente referente à sua opinião do produto
 * @apiSuccess {Number} nota Nota dada ao produto pelo cliente, de 0 a 5
 * @apiSuccess {Number} numPedido Número do pedido dentro do site de compras
 * @apiSuccess {Object[]} cliente Informações do cliente (nome, data de nascimento, cidade)
 * @apiSuccess {Object[]} produto Informações do produto (tipo, modelo)
 * @apiSuccess {Object[]} sentimentos Sentimentos identificados no texto do feedback
 * 
 * @apiSuccessExample Success-Response:
 *{
 *      "_id": "5ddd541cf1850b51d8ed74ca",
 *      "feedback": "Produto muito bom! Usabilidade e funções ótimas, foi apenas um pouco difícil a instalação.",
 *      "nota": 3.5,
 *      "numPedido": 17,
 *      "cliente": [
 *          {
 *              "nome": "Jennifer Mardegan",
 *              "dataNascimento": "1988-01-26T02:00:00.000Z",
 *              "cidade": "São Paulo"
 *          }
 *      ],
 *      "produto": [
 *          {
 *              "tipo": "Geladeira",
 *              "modelo": "Brastemp BRM45H"
 *          }
 *      ],
 *      "sentimentos": [
 *          "alegria",
 *          "confiante",
 *          "analitico",
 *          "tristeza"
 *      ]
 *  }
 */
router.get("/", controller.getTodos)

/**
 * @api {get} /feedbacks/:id
 * @apiName GetById
 * @apiGroup 2. Busca Feedbacks por ID
 *
 * @apiParam {Number} _id ID único do feedback referente a sua identificação no banco de dados MongoDB
 *
 * @apiSuccess {String} _id ID do banco de dados MongoDB (parâmetro de filtro)
 * @apiSuccess {String} feedback Texto do cliente referente à sua opinião do produto
 * @apiSuccess {Number} nota Nota dada ao produto pelo cliente, de 0 a 5
 * @apiSuccess {Number} numPedido Número do pedido dentro do site de compras
 * @apiSuccess {Object[]} cliente Informações do cliente (nome, data de nascimento, cidade)
 * @apiSuccess {Object[]} produto Informações do produto (tipo, modelo)
 * @apiSuccess {Object[]} sentimentos Sentimentos identificados no texto do feedback
 *
  * @apiSuccessExample Success-Response:
 *{
 *      "_id": "5ddd541cf1850b51d8ed74ca",
 *      "feedback": "Produto muito bom! Usabilidade e funções ótimas, foi apenas um pouco difícil a instalação.",
 *      "nota": 3.5,
 *      "numPedido": 17,
 *      "cliente": [
 *          {
 *              "nome": "Jennifer Mardegan",
 *              "dataNascimento": "1988-01-26T02:00:00.000Z",
 *              "cidade": "São Paulo"
 *          }
 *      ],
 *      "produto": [
 *          {
 *              "tipo": "Geladeira",
 *              "modelo": "Brastemp BRM45H"
 *          }
 *      ],
 *      "sentimentos": [
 *          "alegria",
 *          "confiante",
 *          "analitico",
 *          "tristeza"
 *      ]
 *  }
 *
 * @apiError FeedbackNotFound O ID não foi localizado.
 *
 * @apiErrorExample Error-Response:
 *  {
 *      "message": "ID não localizado: ${feedbackId}"
 *  }
 *      
 */
router.get("/:id", controller.getById)

/**
 * @api {get} /feedbacks/sentimento/:sentimento
 * @apiName GetSentimento
 * @apiGroup 3. Busca Feedbacks por sentimento
 *
 * @apiParam {String} sentimento Sentimento específico para filtro do relatório 
 *
 * @apiSuccess {String} _id ID do banco de dados MongoDB (parâmetro de filtro)
 * @apiSuccess {String} feedback Texto do cliente referente à sua opinião do produto
 * @apiSuccess {Number} nota Nota dada ao produto pelo cliente, de 0 a 5
 * @apiSuccess {Number} numPedido Número do pedido dentro do site de compras
 * @apiSuccess {Object[]} cliente Informações do cliente (nome, data de nascimento, cidade)
 * @apiSuccess {Object[]} produto Informações do produto (tipo, modelo)
 * @apiSuccess {Object[]} sentimentos Sentimentos identificados no texto do feedback (incluindo parâmetro)
 *
 * @apiSuccessExample Success-Response:
*{
 *      "_id": "5ddd541cf1850b51d8ed74ca",
 *      "feedback": "Produto muito bom! Usabilidade e funções ótimas, foi apenas um pouco difícil a instalação.",
 *      "nota": 3.5,
 *      "numPedido": 17,
 *      "cliente": [
 *          {
 *              "nome": "Jennifer Mardegan",
 *              "dataNascimento": "1988-01-26T02:00:00.000Z",
 *              "cidade": "São Paulo"
 *          }
 *      ],
 *      "produto": [
 *          {
 *              "tipo": "Geladeira",
 *              "modelo": "Brastemp BRM45H"
 *          }
 *      ],
 *      "sentimentos": [
 *          "alegria",
 *          "confiante",
 *          "analitico",
 *          "tristeza"
 *      ]
 *  }
 */
router.get("/sentimento/:sentimento", controller.getSentimento)

router.use(authMiddleware)

/**
 * @api {post} /feedbacks
 * @apiName Post
 * @apiGroup 4. Inclui novo Feedback
 *
 * @apiSuccess {String} _id ID do banco de dados MongoDB (parâmetro de filtro)
 * @apiSuccess {String} feedback Texto do cliente referente à sua opinião do produto
 * @apiSuccess {Number} nota Nota dada ao produto pelo cliente, de 0 a 5
 * @apiSuccess {Number} numPedido Número do pedido dentro do site de compras
 * @apiSuccess {Object[]} cliente Informações do cliente (nome, data de nascimento, cidade)
 * @apiSuccess {Object[]} produto Informações do produto (tipo, modelo)
 * @apiSuccess {Object[]} sentimentos Sentimentos identificados no texto do feedback
 *
 * @apiSuccessExample Success-Response:
 * {
 *       "_id": "5df44754c01f4f5fe47e9b9e",
 *       "feedback": "O produto parece muito bem acabado. Só achei estranho o barulho quando a base é levantada. O pedido demorou muito tempo para chegar.",
 *       "nota": 4,
 *       "numPedido": 78,
 *       "cliente": [
 *           {
 *               "nome": "José Zanforlin",
 *               "dataNascimento": "1987-12-01T02:00:00.000Z",
 *               "cidade": "São Paulo"
 *           }
 *       ],
 *       "produto": [
 *           {
 *               "tipo": "Batedeira",
 *               "modelo": "KitchenAid Artisan"
 *           }
 *       ],
 *       "sentimentos": [
 *           "medo",
 *           "analitico"
 *       ]
 *   }
 */
router.post("/", controller.post)

/**
 * @api {put} /feedbacks/:id
 * @apiName UpdateFeedback
 * @apiGroup 5. Atualiza Feedback
 *
 * @apiParam {Number} _id ID único do feedback referente a sua identificação no banco de dados MongoDB
 *
 * @apiSuccess {String} _id ID do banco de dados MongoDB (parâmetro de filtro)
 * @apiSuccess {String} feedback Texto do cliente referente à sua opinião do produto
 * @apiSuccess {Number} nota Nota dada ao produto pelo cliente, de 0 a 5
 * @apiSuccess {Number} numPedido Número do pedido dentro do site de compras
 * @apiSuccess {Object[]} cliente Informações do cliente (nome, data de nascimento, cidade)
 * @apiSuccess {Object[]} produto Informações do produto (tipo, modelo)
 * @apiSuccess {Object[]} sentimentos Sentimentos identificados no texto do feedback
 *
 * @apiSuccessExample Success-Response:
 * {
 *      "message": "Feedback atualizado com sucesso!"
 * }
 */
router.put("/:id", controller.updateFeedback)

/**
 * @api {delete} /feedbacks/:id
 * @apiName DeleteFeedback
 * @apiGroup 6. Exclui Feedback
 *
 * @apiParam {Number} _id ID único do feedback referente a sua identificação no banco de dados MongoDB
 *
 * @apiSuccessExample Success-Response:
 * {
 *      "message": "Feedback removido com sucesso!"
 * }
 */
router.delete("/:id", controller.deleteFeedback)

module.exports = router