# Comparing 2 arrays
**JavaScript**: subtracting arrays, kinda the opposite of `concat()`.

## Usage

```javascript
c_a(array_1, array_2)
```

It's recommended to use the latest [compare_arrays_3.js](https://github.com/monkeyraptor/compare_2_arrays/blob/master/compare_arrays_3.js)


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
  ```javascript
  c_a(array_1, array_2).difference; // get the different array elements
  c_a(array_1, array_2).same_elements; // get the same  array elements
  ```
  
 > If there's **no same element** found, the `difference` property will consist of all the 2 arrays elements, and the `same_elements` property will have empty array `[]`.

- For invalid input, it will generate ~~**error** `string`~~ empty array `[]` for each object property.

## Additional method for removing duplicates in each array

You can also use [`remove duplicates`](https://github.com/monkeyraptor/remove_duplicates) to remove duplications in both arrays before they are compared or for trimming the final output. Depends your needs though.
