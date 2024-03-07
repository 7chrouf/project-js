// convert revert
function convert(str) {
  let a = str.split("");

  let reverst = a.reverst();

  let newstr = reverst.join("");
  return newstr;
}
//strings
function filterStrings(tab) {
  let x = [];
  for (let elt of tab) {
    if (typeof elt === "number") {
      x.push(elt);
    }
    return x;
  }
}
// length

function countlength(str) {
  return str.length;
}
// uppercase

function convertToUppercase(str) {
  let newStr = " ";
  newStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === " ") {
      newStr = newStr + " " + str[i + 1].toUpperCase();
      i++;
    } else {
      newStr += str[i];
    }
    return newStr;
  }
}

//max et min
function maxMin(tab) {
  if (tab.length === 1) {
    return tab[0];
  }
  let min = [0];
  let max = [1];
  for (let elt of tab) {
    if (elt > max) {
      max = elt;
    }
    if (elt < min) {
      min = elt;
    }
  }
  return { max, min };
}
//array
function sumArray(tab) {
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
  }
  return sum;
}
//array filter
function filterArray(tab) {
  let newArr = [];
  for (let elt of tab) {
    if (elt % 2 === 0) {
      newArr.push(elt);
    }
  }
  return newArr;
}
//factorial
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
// Prime Number Check
function isPrime(n) {
  if (n === 1) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) break;
    return true;
  }
  return false;
}
//fibonnacci
function Fibonnacci(n) {
  if (n === 0) return [0];
  let result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}
