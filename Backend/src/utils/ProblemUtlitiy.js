const axios = require('axios');
const { set } = require('mongoose');


const getLanguageById = (lang) => {
    const language = {
        "c++": 54,
        "java": 62,
        "javascript": 63
    }
    return language[lang.toLowerCase()];
}
const submitBatch = (submssion) => {
    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
        params: {
            base64_encoded: 'true',
        },
        headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": process.env.JUDGE0_API_KEY,
            "content-type": "application/json"
        },
        data: {
            submssion
        }


    }
}
const waiting = async (timer) => {
    setTimeout(() => {
        return 1;
    }, timer);
}

const submitToken = async (tokens) => {
    const options = {
        method: 'GET',
        url: 'https://judge0-ce.p.rapidapi.com/submissions',
        params: {
            tokens: resultToken.join(','),
            base64_encoded: 'true',
            fields: '*'
        },
        headers: {
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "x-rapidapi-key": process.env.JUDGE0_API_KEY
        }
    };

    try {
        const response = await axios.request(options);
        return response.data()
    }
    catch (error) {
        console.log(error)
    }
    while (true) {
        const result = await fetchData();
        const IsResultObtained = result.submssion.every((r) => r.status_id > 2)
        if (!IsResultObtained)
            return result.submssion;

        await waiting(1000);

    }

}



module.exports = { getLanguageById, submitBatch, submitToken };