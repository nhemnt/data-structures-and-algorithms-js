function factorialOfANumber(n){
    if(n === 1) return 1;

    return factorialOfANumber(n-1) * n;
}
console.log(factorialOfANumber(5)); // 120


// 2 = 2 * 1 = 2
// 3 = 3 * 2 * 1 = 6
// 4 = 4 * 3 * 2 * 1 = 24
// 5 = 5 * 4 * 3 * 2 * 1 = 120