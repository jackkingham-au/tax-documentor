export const calcTotalEarned = (data) => {
    return data.map(row => Number(row.amount)).reduce((total, current) => total + current);
}

export const calcAmountTaxable = (data) => {
    return data.map(row => Number(row.tax)).reduce((total, current) => total + current);
}