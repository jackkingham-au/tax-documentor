const { GoogleSpreadsheet } = require('google-spreadsheet');
const fs = require('fs');

const TAX_SHEET_ID = '1I-mWL5uL3S-ub3xYQw1Ryg4lwX6_1atMgvbRb3wGGOk';
const CREDENTIALS = JSON.parse(fs.readFileSync('./functions/silicon-clock-361523-3f907a140729.json'));

const doc = new GoogleSpreadsheet(TAX_SHEET_ID);

const initGoogle = async () => {
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });  
    
    await doc.loadInfo();
}

module.exports = {
    doc, initGoogle
};