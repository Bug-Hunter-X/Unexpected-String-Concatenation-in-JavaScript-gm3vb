function foo(a, b) {
  //Explicitly convert arguments to numbers
  a = Number(a);
  b = Number(b);
  return a + b;
}

console.log(foo(1, '2')); // Output: 3