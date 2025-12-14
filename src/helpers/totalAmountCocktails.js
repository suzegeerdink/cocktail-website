export function calculateTotalAmount(cocktails) {
    let total = 0;

    for (let i = 0; i < cocktails.length; i++) {
        total = total + Number(cocktails[i].amount);
    }

    return total;
}