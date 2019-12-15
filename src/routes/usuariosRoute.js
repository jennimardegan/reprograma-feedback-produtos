const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuariosController')

/**
* @api {post} /feedbacks/usuarios
* @apiName Post
* @apiGroup 07. Cadastro de senha para usuario
*
* @apiParam {String} nome Nome do usuario
* @apiParam {String} email Email do usuario
* @apiParam {String} senha Senha do usuario
*
* @apiSuccess {String} _id ID do usuario
* @apiSuccess {String} nome Nome do usuario
* @apiSuccess {String} email Email do usuario
* @apiSuccess {String} senha Senha criptografada do usuario
* @apiSuccess {Date} createdAt Data de quando a senha foi criada
* 
* @apiSuccessExample Success-Response:
*     {
*      "_id": "5df3afd6951a08341830489e",
*      "nome": "Jennifer Mardegan",
*      "email": "jennifer_mardegan@hotmail.com",
*      "senha": "$2a$10$Nhs2GquEHPp/kcP/NDu.d.ZgBEVcHVeGVtR0MIGTWL1eBZa4sGYwe",
*      "createdAt": "2019-12-13T15:35:50.283Z"
*     }
*/
router.post('/', controller.post)

/**
 * @api {auth} /feedbacks/auth
 * @apiName authMiddleware
 * @apiGroup 08. Autenticacao de usuario
 *
 * @apiParam {String} email Email do usuario
 * @apiParam {String} senha Senha do usuario
 *
 * @apiSuccess {String} Token Token da senha do usuário
 *
 * @apiSuccessExample Success-Response:
 *     {
 *        "user": {},
 *        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NzYyNTE2NDQsImV4cCI6MTU3NjUxMDg0NH0.X1hjAtk_hyPnU8BKjw5gk90Z4Uy72xd166K6N8F583M"
 *     }
 */
router.post('/auth', controller.postAuth)

/**
 * @api {get} /usuarios
 * @apiName getUsuarios
 * @apiGroup 09. Buscar Usuarios cadastrados
 *
 *
 * @apiSuccess {String} _id ID do usuario
 * @apiSuccess {String} nome Nome do usuario
 * @apiSuccess {String} email Email do usuario
 * @apiSuccess {String} senha Senha criptografada do usuario
 * @apiSuccess {Date} createdAt Data de quando a senha foi criada
 *
 *
 * @apiSuccessExample Success-Response:
 *     {
 *      "_id": "5df3afd6951a08341830489e",
 *      "nome": "Jennifer Mardegan",
 *      "email": "jennifer_mardegan@hotmail.com",
 *      "senha": "$2a$10$Nhs2GquEHPp/kcP/NDu.d.ZgBEVcHVeGVtR0MIGTWL1eBZa4sGYwe",
 *      "createdAt": "2019-12-13T15:35:50.283Z"
 *     }
 */
router.get('/', controller.get)

/**
 * @api {delete} /usuarios/:id
 * @apiName deleteUsuario
 * @apiGroup 10. Deleter usuario por ID
 * 
 * @apiParam {String} _id Id do Usuário
 * 
 * @apiSuccessExample Success-Response:
 * 
 *   {
 *      "mensagem": "Usuário removido com sucesso!"
 *   }   
 */
router.delete('/:id', controller.deleteUsuarios)

module.exports = router