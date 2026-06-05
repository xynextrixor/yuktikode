
const createProblem = async (req, res) => {
    const { tittle, description, difficulty, tags, 
        visibleTestCases, hiddenTestCases, 
        starterCode,referenceSolution } = req.body;
        try
        {
            for(const element {language,completeCode}of referenceSolution)
            {
                // Process each reference solution
                // ...
            }
        }
        catch(error)
        {
            res.status(500).json({ error: 'Failed to create problem' });
        }

}