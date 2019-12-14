const express = require("express")
const router = express.Router()
const controller = require("../controllers/feedbacksController")
const authMiddleware = require('../middleware/auth')

//fazer essa template para cada rota
/**
 * @api {get} /feedbacks Requisição de todos os feedbacks cadastrados no banco de dados MongoDB
 * @apiName GetTodos
 * @apiGroup 1. Busca Feedbacks
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP 500 Internal Server Error
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get("/", controller.getTodos)
/**
 * @api {get} /feedbacks/:id Requisição de um feedback específico cadastrado no banco de dados MongoDB
 * @apiName GetById
 * @apiGroup 2. Busca Feedbacks por ID
 *
 * @apiParam {Number} id ID único do usuário referente a sua identificação no banco de dados MongoDB
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP 500 Internal Server Error
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get("/:id", controller.getById)
/**
 * @api {get} /feedbacks/sentimento/:sentimento Requisição de feedbacks que possuem um sentimento específico
 * @apiName GetSentimento
 * @apiGroup 3. Busca Feedbacks por sentimento
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP 500 Internal Server Error
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get("/sentimento/:sentimento", controller.getSentimento)

/**
 * @api {auth} / Autenticação de usuario
 * @apiName authMiddleware
 * @apiGroup User
 *
 * @apiParam {String} email Email do usuário.
 * @apiParam {String} senha Senha do usuário.
 *
 * @apiSuccess {String} Token Token da senha do usuário.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "user": {},
 *        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzYyNTE2NDQsImV4cCI6MTU3NjUxMDg0NH0.X1hjAtk_hyPnU8BKjw5gk90Z4Uy72xd166K6N8F583M"
 *     }
 *
 */
router.use(authMiddleware)

/**
 * @api {post} /feedbacks Inclui um novo cadastro de feedback no banco de dados MongoDB
 * @apiName Post
 * @apiGroup 4. Inclui Feedback
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP 201 Created
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP 500 Internal Server Error
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.post("/", controller.post)
/**
 * @api {put} /feedbacks/:id Alteração do cadastro de um feedback específico no banco de dados MongoDB
 * @apiName UpdateFeedback
 * @apiGroup 5. Altera Feedback
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 No content
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP 500 Internal Server Error
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.put("/:id", controller.updateFeedback)
/**
 * @api {delete} /feedbacks/:id Exclui um feedback específico do banco de dados MongoDB
 * @apiName DeleteFeedback
 * @apiGroup 6. Exclui Feedback
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 204 No content
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP 500 Internal Server Error
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.delete("/:id", controller.deleteFeedback)

module.exports = router