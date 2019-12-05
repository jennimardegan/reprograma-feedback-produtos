const express = require("express")
const router = express.Router()
const controller = require("../controllers/feedbacksController")

router.get("/", controller.getTodos)
router.get("/:id", controller.getById)
router.post("/", controller.post)
router.put("/:id", controller.updateFeedback)
router.delete("/:id", controller.deleteFeedback)

module.exports = router