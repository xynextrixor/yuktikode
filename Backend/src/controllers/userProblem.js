
const { response } = require('express');
const { getLanguageById, submitBatch, submitToken } = require('../utils/ProblemUtlitiy');
const Problem = require('../models/problem');
const createProblem = async (req, res) => {
    const { tittle, description, difficulty, tags,
        visibleTestCases, hiddenTestCases,
        starterCode, referenceSolution } = req.body;
    try {
        for (const { language, completeCode } of referenceSolution) {
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
                if (test.status_id !== 3)
                    //handle the error cas
                    return response.status(400).json({ error: 'Reference solution failed for a test case' });


            }
        }
        await Problem.create({
            ...req.body,
            problemCreator: req.result._id
        });
        res.status(201).json({ message: 'Problem created successfully' });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create problem' });
    }

}
const UpdateProblem = async (req, res) => {
    const { id } = req.param;
    const createProblem = async (req, res) => {
        const { tittle, description, difficulty, tags,
            visibleTestCases, hiddenTestCases,
            starterCode, referenceSolution } = req.body;
        try 
        {
            if (!id) 
                res.status(400).send(";Missing Feild ID")
            

            const DsaProblem = await problemRouter.findById(id);
            if (!DsaProblem) 
                return res.status(404).send("Id is Not Present in Server")
            

            for (const { language, completeCode } of referenceSolution)
                 
            {
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
            }



                const submitResult = await submitBatch(submission);
                const resultToken = submitResult.map((value) => value.token);
                const testResult = await submitToken(resultToken);
                for (const test of testResult) {
                    if (test.status_id !== 3)
                        return response.status(400).json({ error: 'Reference solution failed for a test case' });
                        //handle the error cas

                }
            }
        
        
            catch (error) {
            res.status(4003).send("message" + error);
        }
    

        res.status(201).json({ message: 'Problem created successfully' });
}   


    const newProblem = await problemRouter.findByIdAndUpdate(id, { ...req.body }, { runValidator: true, new: true })
    res.status(200).send(newProblem);


const deleteProblme = async (req, res) => {
    const { id } = req.param;
    try {
        if (!id) {
            return res.status(4000).send("id is missing")
        }
        const deleteProblme = await Problem.findByIdAndDelete(id)
        if (!deleteProblme) {
            return res.status(4040).send("probem si missing")
        }
        res.status(200).send("succesfully")

    }
    catch (error) {
        res.status(500).send("The Error is" + error)
    }
}
const getProblemById = async (req, res) => {
    const { id } = req.param;
    try {
        if (!id) {
            return res.status(4000).send("id is missing")
        }
        const getProblem = await Problem.findById(id).select("_id title difficulty tags startCode refrenceSolution")

        if (!getProblem) {
            return res.status(4040).send("probem is missing")
        }
        res.status(200).send(getProblem);

    }
    catch (error) {
        res.status(500).send("The Error is" + error)
    }
}
const getAllProblem = async (req, res) => {
    try {

        const getProblem = await Problem.findById({}).select("_id  title difficulty tags ")

        if (!getProblem) {
            return res.status(4040).send("probem is missing")
        }
        res.status(200).send(getProblem);

    }
    catch (error) {
        res.status(500).send("The Error is" + error)
    }
}
module.exports = { createProblem, UpdateProblem, deleteProblme, getProblemById, getAllProblem };
