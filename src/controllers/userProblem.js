
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
            const submission = visibleTestCases.map((input, output) => ({
                source_code: completeCode,
                language_id: language,
                stdin: input,
                expected_output: output
            }));



            const submitResult = await submitBatch(submission);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create problem' });
    }

}