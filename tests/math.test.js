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