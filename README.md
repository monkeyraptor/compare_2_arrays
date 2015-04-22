# Comparing 2 arrays
**JavaScript**: subtracting arrays, kinda the opposite of `concat()`.

## Usage

`c_a(array_1, array_2)`

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
