const axios = require('axios');


const getlanauageById = (lang) => {
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

async function fetchData() {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    }
    catch (error) {
        console.log(error)
    }
}
fetchData();




module.exports = { getlanauageById, submitBatch };