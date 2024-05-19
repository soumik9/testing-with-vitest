import { it, expect } from 'vitest'
import { add } from '..'

it('should return correct sum if array of numbers provided', () => {

    // arrange [AAA]
    const numbers = [1, 2, 3];
    const expectedResult = numbers.reduce((acc, cur) => acc + cur);

    // Actions
    const result = add(numbers);

    // assertions
    expect(result).toBe(expectedResult);
})

it('should return nan if array of numbers provided have any inavalid string', () => {

    // arrange [AAA]
    const numbers = [1, 'inavalid', 3];

    // Actions
    const result = add(numbers);

    // assertions
    expect(result).toBeNaN();
})

it('should return correct sum if array of number strings provided', () => {

    // arrange [AAA]
    const numbers = ['1', '2', 3];
    const expectedResult = numbers.reduce((acc, cur) => +acc + +cur);

    // Actions
    const result = add(numbers);

    // assertions
    expect(result).toBe(expectedResult);
})