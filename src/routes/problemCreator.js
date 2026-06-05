const express = require("express");
const problemRouter = express.Router();


//////
///ceate
problemRouter.post("/create", problemCreate);
problemRouter.patch("/:id", problemUpdate);
problemRouter.delete("/:id", problemDelete);



problemRouter.get("/:<id>", problemFetch);
problemRouter.get("/", getallProblem);
problemRouter.get("/user", solvedproblem)
module.exports = problemRouter;
///fetxch
//udate///
//detele