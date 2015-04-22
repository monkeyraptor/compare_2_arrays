# Comparing 2 arrays
**JavaScript**: subtracting arrays, kinda the opposite of `concat()`.

## Usage

`c_a(array_1, array_2)`

## Method

It will automatically decide the array reference by `length`. The longest array will be the reference.

If they have the same `length`, then the `array_1` will be the reference.

This **won't change** both the original arrays.

## Output

- For valid inputs, it will generate an object:
```javascript
{
  "difference": [array type],
  "same_elements": [array type]
}
```
 > They can be accessed by:
  - `c_a(array_1, array_2).difference`
  - `c_a(array_1, array_2).same_elements`.
  
 > If there's **no same element** found, the `difference` property will consist of all the 2 arrays elements, and the `same_elements` property will have empty array `[]`.

- For invalid input, it will generate **error** `string` for each object property.
