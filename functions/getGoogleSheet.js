const { doc, initGoogle } = require('./loadGoogleSheet');

exports.handler = async (event, context) => {
    await initGoogle();

    const sheet = await doc.sheetsByIndex[0];

    const rows = await sheet.getRows();

    const data = rows.map(row => ({
        amount: row.AMOUNT,
        tax: row['TAXABLE AMOUNT'],
        taxPercentage: row['TAX PERCENTAGE']
    }))

    return {
        statusCode: 200,
        body: JSON.stringify({rows: data})
    }
}