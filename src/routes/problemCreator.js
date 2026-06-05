const express = require("express");
const problemRouter = express.Router();
const adminmiddleware = require("../middleware/adminMidlleware");


//////
///ceate
problemRouter.post("/create", adminmiddleware, createProblem);
problemRouter.patch("/:id", adminmiddleware, updateProblem);
problemRouter.delete("/:id", adminmiddleware, deleteProblem);



problemRouter.get("/:<id>", getProblemById);
problemRouter.get("/", getallProblems);
problemRouter.get("/user", solveAllproblemsByUser);
module.exports = problemRouter;
///fetxch
//udate///
//detele