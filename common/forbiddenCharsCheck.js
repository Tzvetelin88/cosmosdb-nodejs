function forbiddenCharsCheck(requestBody) {
    if (requestBody) {
        const xssRegex = /^[^'<>]*$/
        const fields = Object.values(requestBody)

        if (!fields.every((f) => xssRegex.test(f))) {
            throw `Forbidden characters detected! Request Body: ${JSON.stringify(requestBody)}`
        };
    };
}

module.exports = forbiddenCharsCheck