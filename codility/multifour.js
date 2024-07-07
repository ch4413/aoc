function solution(A) {

    let largestMultiple = -10001;

    // Iterate through the filtered and sorted array
    for (let i = 0; i < A.length; i++) {
        let remainder = A[i] % 4
        if (remainder === 0 && A[i] > largestMultiple) {
            largestMultiple = A[i];
        }
    }

    // Return the smallest missing positive integer
    return largestMultiple;
}

console.log(solution([-1, 2, 0]))
console.log(solution([4, 8, 234]))
console.log(solution([-3, -5]))