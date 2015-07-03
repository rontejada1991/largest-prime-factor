var our_number = 600851475143;
var i;
var times_iterated = 0;
// We will reduce our number by diving into it until we reach
// the largest prime factor.dq
// Start from the first prime factor, 2.
// Keep going until our prime factor is lower than our iterator 
for (i = 2; i <= our_number; i++) {
  if (our_number % i === 0) {
    our_number /= i;
    // decrement i, our number might still be divisible by our current iterator
    i--;
  }
  times_iterated++;
}
// Printing our results
console.log("Times iterated: " + times_iterated);
console.log("Largest prime factor: " + i);