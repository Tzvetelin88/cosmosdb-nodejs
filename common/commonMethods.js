const convertIsoDateToMMddYYYY = (isoDate) => {
    let date = new Date(isoDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return month + '/' + dt + '/' + year
}

module.exports = {
    convertIsoDateToMMddYYYY
}