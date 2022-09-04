const setRow = (event) => {
    const eventObject = event.data.object;
    const amount = (eventObject.amount_received / 100);
    const taxPercentage = 0.1

    return {
        SOURCE: 'Stripe',
        IDENTIFIER: eventObject.id,
        AMOUNT: amount,
        'TAXABLE AMOUNT': (amount * taxPercentage),
        'TAX PERCENTAGE': `${(taxPercentage * 100)}%`
    }
}

module.exports = setRow;