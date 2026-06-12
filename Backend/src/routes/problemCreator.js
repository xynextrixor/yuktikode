const express = require("express");
const problemRouter = express.Router();
const adminmiddleware = require("../middleware/adminMidlleware");
const creteProblem = require("../controllers/userProblem");
const UserMiddleware = require("../middleware/userMiddleware")


//////
///ceate
problemRouter.post("/create", adminmiddleware, createProblem);
problemRouter.put("/update/:id", adminmiddleware, updateProblem);
problemRouter.delete("/delete/:id", adminmiddleware, deleteProblem);



problemRouter.get("/problemById/:<id>", UserMiddleware, getProblemById);
problemRouter.get("/getAllproblem", UserMiddleware, getallProblems);
problemRouter.get("/problemSolvedByUser", UserMiddleware, solveAllproblemsByUser);
module.exports = problemRouter;
///fetxch
//udate///
//detele