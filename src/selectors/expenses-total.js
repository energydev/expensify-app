export default (expenses) => {
    const amounts = expenses.map(exp => exp.amount);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = amounts.reduce(reducer, 0)
    return total;
};