
const factorial = ( function(){
  // the cache maintained as soon as the anonymous function is executed and assigned to factorial
  const factorialCache = {
  undefined: 'please pass argument to calculate',
  0: '0',
  1: 1
  };

  return function(n) {
    if(factorialCache[n+'']) { console.log('from cache');return parseInt(factorialCache[n+''])};

    let factorial = 1;

      for(let i=2; i<=n; i++) {
      factorial = factorial*i;
      }
    factorialCache[n]=factorial;
    return factorial;
  }}
)();

factorial() //=> from cache /n 'please pass argument to calculate'
factorial(0) //=> from cache /n 0
factorial(5) //=> 120
factorial(5) //=> from cache /n 120
