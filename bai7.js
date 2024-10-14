// Bài tập 7: Tính giai thừa
// Đề bài: Viết hàm factorial để tính giai thừa của một số nguyên dương.

// Input: Một số nguyên dương, ví dụ: 5.

// Output: Giai thừa của số đó, ví dụ: 120 cho số 5.

const factorial = (number) => {
  let multi = 1;
  for (let i = 1; i <= number; i++) {
    multi *= i;
  }
  return multi;
};

const factorialResult = factorial(13);
console.log(factorialResult);
