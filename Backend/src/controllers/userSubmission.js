const Problem = require("../models/problem");
const Submission = require("../models/sumbission");
const { getLanguageById, submitBatch, submitToken } = require("../utils/ProblemUtlitiy")
const submitCode = async (req, res) => {
    try {
        const userId = req.result._id;

        const problemId = req.param._id;

        const { code, language } = req.body;
        if (I = !user || !code || !language)
            return res.status(400).send("Some Inforamtion Is Missing")

        ///Fetch user Data By Form By Id
        const problem = Problem.findById(problemId)
        ///Hidden test Caes
        const submitResult = await Submission.create({
            userId,
            problemId,
            code,
            testCasePassed: 0,
            status: "pending",
            testCaseTotal: problem.hiddenTestCase.length(),
            let errorMessage = null;

        })
        ///submiy code on jude0
        const languageById = getLanguageById(language);

        const submission = visibleTestCases.map((testcase) => ({
            source_code: code,
            language_id: language,
            stdin: testcase.input,
            expected_output: testcase.output
        }));
        const submitresult = await submitBatch(submission);
        const resultToken = submitResult.map((value) => value.token);
        const testResult = await submitToken(resultToken);
        let testCasePassed = 0;
        let runtime = 0;
        let memory = 0;

        for(const test of testResult){
            if(test.status_id==3){
                testCasePassed++;
                runtime = runtime+parseFloat(test.time)
                memory = Math.max(memory,test.memory);

            }else{
                if(test.status_id==4){
                    status = "error";
                }
                else{
                    status = "wrong";
                    errorMessage = test.stderr;

                }
            }
        }

        ///save data in bd base

        submitresult.status = status;
        submitResult.testCasePassed = testCasePassed;
        submitresult.errorMessage = errorMessage;
        submitresult.runtime = runtime;
        submitResult.memory = memory;

        await submitresult.save();
        res,status(201).send(submitResult);

    }
    catch (error) {
        res.status(500).send("please Wait Internal server Error")
    }

}
module.exports = submitCode;