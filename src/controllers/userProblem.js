
const { response } = require('express');
const { getLanguageById, submitBatch } = require('../utils/ProblemUtlitiy');
const createProblem = async (req, res) => {
    const { tittle, description, difficulty, tags,
        visibleTestCases, hiddenTestCases,
        starterCode, referenceSolution } = req.body;
    try {
        for (const element { language, completeCode } of referenceSolution) {
            // Process each reference solution

            //scoucode
            ///languageId
            ////stdin
            //expected output
            // ...
            /// iAM CRETEING ANS BACTCH DATABASE FOR EACH TEST CASE
            const language = getLanguageById(language);
            const submission = visibleTestCases.map((testcase) => ({
                source_code: completeCode,
                language_id: language,
                stdin: testcase.input,
                expected_output: testcase.output
            }));



            const submitResult = await submitBatch(submission);
            const resultToken = submitResult.map((value) => value.token);
            const testResult = await submitToken(resultToken);
            for (const test of testResult) {
                if (test.status_id !== 3) {
                    //handle the error case
                    return response.status(400).json({ error: 'Reference solution failed for a test case' });

                }
            }
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create problem' });
    }

}