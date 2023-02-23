//first exercise

function isEqual(a, b) {
    if(a === b ) {
        return "is equel";
    } else {
        return "not equel";
    }
}

console.log(isEqual(20,20));

//second exercise

function toCelsius(fahrenheit) {
    if(typeof fahrenheit ==='number'){
        return (fahrenheit-32)*(5/9);
    }else{
        return false;
    }
}
console.log(toCelsius('c'));

//third exercise
 
  const operation1 = function(a, b) {
    return a+b;
  }

  const operation2 = function(a,b) {
    return a-b;
  }
  const operation3 = function(a,b) {
    return a/b;
  }
  const operation4 = function(a,b) {
    return a*b;
  }

  console.log(operation1(20,30));
  console.log(operation2(20,30));
  console.log(operation3(20,30));
  console.log(operation4(20,30));