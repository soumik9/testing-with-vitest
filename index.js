export const add = (numbers) => {
    let sum = 0;

    // throw new Error('something wrong')

    for (const number of numbers) {
        sum += +number;
    }

    return sum
}