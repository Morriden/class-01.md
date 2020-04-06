Test driven development.

```js
test('getLength should return the right string', function(assert) {
    return `the length of ${someString} is ${someString.length}`;
}

test(`getFirstLongString should return the first long string`, function(assert) {
    const result = getFirstLongString([
        'this',
        'is',
        'my',
        'california',
        'array',
    ])
}
//an array example for getting lengths etc.
export function getFirstLongString(arrayOfStrings) {
    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length > 8) {
            return arrayOfStrings[i];
        }
    }
}

myArray.forEach(function(word) {
    console.log(word)
})
this
is
my
california
array