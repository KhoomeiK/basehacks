const functions = require('firebase-functions');
const language = require('@google-cloud/language');

exports.sentiment = functions.https.onCall(data => {
    const client = new language.LanguageServiceClient();
    const document = {
        content: data,
        type: "PLAIN_TEXT"
    };

    return client.analyzeSentiment({ document: document })
        .then(results => {
            return (results[0].documentSentiment.score);
        })
        .catch(err => {
            console.error("ERROR:", err);
            return(0);
        });
});