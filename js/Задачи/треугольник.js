let a = 21;
let b = 22;
let c = 21;
if (a == b == c) {
    console.log("Равносторонний");
}
if ( (a||b) == c) {
  console.log("Равнобедренный");
  }
  if ((a&&b&&c)!= b&&a&&c ) {
    console.log('Разностороний')
  }
