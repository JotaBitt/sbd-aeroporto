const express = require('express');
const VooController = require('../controllers/VooController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Voo:
 *       type: object
 *       required:
 *         - numero
 *         - destino
 *         - horario
 *         - status
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do voo
 *         numero:
 *           type: string
 *           description: Número do voo
 *         destino:
 *           type: string
 *           description: Destino do voo
 *         horario:
 *           type: string
 *           format: time
 *           description: Horário do voo
 *         status:
 *           type: string
 *           description: Status do voo
 *       example:
 *         id: 1
 *         numero: "1234"
 *         destino: "Rio de Janeiro"
 *         horario: "14:30:00"
 *         status: "Pendente"
 */

/**
 * @swagger
 * tags:
 *   name: Voo
 *   description: Endpoints de gestão de voos
 */

/**
 * @swagger
 * /voos:
 *   post:
 *     summary: Cria um novo voo
 *     tags: [Voo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Voo'
 *     responses:
 *       201:
 *         description: Voo criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Voo'
 *       400:
 *         description: Erro ao criar o voo
 */

/**
 * @swagger
 * /voos:
 *   get:
 *     summary: Retorna a lista de voos
 *     tags: [Voo]
 *     responses:
 *       200:
 *         description: Lista de voos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Voo'
 */

/**
 * @swagger
 * /voos/{id}:
 *   put:
 *     summary: Atualiza os dados de um voo
 *     tags: [Voo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do voo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Voo'
 *     responses:
 *       200:
 *         description: Voo atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Voo'
 *       404:
 *         description: Voo não encontrado
 *       400:
 *         description: Erro ao atualizar o voo
 */

/**
 * @swagger
 * /voos/{id}:
 *   delete:
 *     summary: Remove um voo pelo ID
 *     tags: [Voo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do voo
 *     responses:
 *       200:
 *         description: Voo deletado com sucesso
 *       404:
 *         description: Voo não encontrado
 */

// Rotas para voos
router.post('/', VooController.createVoo);      // Criar voo
router.get('/', VooController.getVoos);        // Listar todos os voos
router.put('/:id', VooController.updateVoo);   // Atualizar voo
router.delete('/:id', VooController.deleteVoo); // Deletar voo

module.exports = router;
