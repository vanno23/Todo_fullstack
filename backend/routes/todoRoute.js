const express = require("express");
const router = express.Router();
const { postTodoData, getTodoData, changeTodoData, deleteTodoData, completeRow } = require("../controllers/todoConteroller");

router.post("/", postTodoData);
router.get("/getTodoData", getTodoData);
router.put("/changeTodoData", changeTodoData);
router.delete("/deleteTodoData/:_id", deleteTodoData);
router.put("/completeRow", completeRow);


module.exports = router;