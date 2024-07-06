console.log('Max Missing values. Run test cases...')

function findSmallestMissingPositiveInteger(A) {
    // Filter out non-positive numbers and sort the array
    let filteredSortedArray = A.filter(num => num > 0).sort((a, b) => a - b);

    // Initialize the smallest missing positive integer
    let smallestMissing = 1;

    // Iterate through the filtered and sorted array
    for (let i = 0; i < filteredSortedArray.length; i++) {
        // If the current number is the smallestMissing, increment smallestMissing
        if (filteredSortedArray[i] === smallestMissing) {
            smallestMissing++;
        }
    }

    // Return the smallest missing positive integer
    return smallestMissing;
}

// Test cases
console.log(findSmallestMissingPositiveInteger([1, 3, 6, 4, 1, 2])); // Output: 5
console.log(findSmallestMissingPositiveInteger([1, 2, 3])); // Output: 4
console.log(findSmallestMissingPositiveInteger([-1, -3])); // Output: 1
