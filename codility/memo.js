
var yourself = {
    fibonacci(n, memo = {}) {
        if (n in memo) return memo[n];
        if (n > 1) {
            memo[n] = this.fibonacci(n - 1, memo) +
            this.fibonacci(n - 2, memo)
            return memo[n]
        } else {
            return n
        }
    }
};

console.log('Fib sequence for ' + '6' + '\n' + yourself.fibonacci(6))
