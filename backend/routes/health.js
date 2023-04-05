const express = require('express');
const router = express.Router();
const { healthControllers } = require("../controllers")

/**
 *@swagger
 *components:
 *  schemas:
 *    Healthcheck:
 *      type: object
 *      properties:
 *        uptime:
 *          type: number
 *          description: The uptime in milliseconds since server start
 *        message:
 *          type: string
 *          description: Healthy message
 *        date:
 *          type: string
 *          format: date-time
 *          description: The date-time of the request
 *      example:
 *        uptime: 413.934154022
 *        message: API is healthy
 *        date: 2023-03-30T08:45:11.283Z
 */

/**
 * @swagger
 * tags:
 *   name: Healthcheck
 *   description: The healthcheck API
 * /api/health:
 *   get:
 *     summary: Get healthcheck
 *     tags: [Healthcheck]
 *     responses:
 *       200:
 *         description: Successfully retrieved products.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */
/**
 * GET healthcheck
 * @author Brandon Bouchard <brandon.bouchard@gov.bc.ca | brandonjbouchard@gmail.com>
 * @method GET
 * @route /health
 */
router.get('/', healthControllers.healthcheck)

module.exports = router;
