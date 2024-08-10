// assuming n >= 0

// iterative approach
var sum_to_n_a = function(n) {
    var sum = 0;
    for(var i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
};

// recursive approach
var sum_to_n_b = function(n) {
    if(n <= 1) return n;
    return n + sum_to_n_b(n - 1);
};

// mathematical approach
var sum_to_n_c = function(n) {
    return (n * (n + 1)) / 2;
};
