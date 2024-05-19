import { it, expect } from 'vitest'
import { add } from '..'

it('should return correct sum if array of numbers provided', () => {
    const result = add([1, 2, 3]);

    expect(result).toBe(6)
})