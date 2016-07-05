// Minimum

// Your code here.
function min(a, b) {
  if (a < b) {
    return a;
  } else if (b < a) {
    return b;
  } else {
    console.log("Both values are equal");
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Recursion

// Your code here.
function isEven(N) {
  var even = 0;
  var odd = 1;
  if (N == even) {
    return true;
  } else if (N == odd) {
    return false;
  } else if (N < 0) {
    return null;
  } else {
    return isEven(N-2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??



// Bean Counting

// Your code here.
function countBs(Bs) {
  var bArr = Bs.split('');
  var count = 0;
  for (var i = 0; i < bArr.length; i++) {
    if (bArr[i] == "B") {
      count++;
    } else {
      count = count;
    }
  }
  return count;
}

// Your code here.
function countChar(string, char) {
  var charArr = string.split('');
  var count = 0;
  for (var i = 0; i < charArr.length; i++) {
    if (charArr[i] == char) {
      count++;
    } else {
      count = count;
    }
  }
  return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4