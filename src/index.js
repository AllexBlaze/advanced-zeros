module.exports = function getZerosCount(number, base) {


  // Getting of prime multipliers and their quantity in the num
  let getPrimeMultipliers = num => {
    // Prime numbers checking
    let isPrime = num => {
      for (var i = 2; i < num; i++) if (num % i == 0) return false;
      return num >= 2; 
    };

    let multiObj = {};
    for (let i = 2, end = num, helpNum = num; i <= end; i++) {
      if (isPrime(i)){
        while(helpNum % i === 0){
          helpNum = helpNum / i;
          (multiObj[i]) ? multiObj[i]++ : multiObj[i] = 1 ;
        };
      };
    };
    return multiObj;
  };

  // Getting of the max prime number's power which the number can be divided
  let getMaxPrimePow = (number, prime) => {
    let ourNumber = number, ourPrime = prime, powCounter = 0;
    while( ourNumber > 0){
      ourNumber = ~~(ourNumber/ourPrime);
      powCounter += ourNumber;
    };
    return powCounter;
  };

  let baseMultipliers = getPrimeMultipliers(base);
  let result = [];


  for (i in baseMultipliers) {
    let numberMultipliers = {};
    numberMultipliers[i] = getMaxPrimePow(number,i);

    result.push( numberMultipliers[i] / baseMultipliers[i] );
  };

  return ~~Math.min.apply(null, result);
};