// Bài tập 6: Kiểm tra số nguyên tố
// Đề bài: Viết hàm isPrime để kiểm tra xem một số nguyên có phải là số nguyên tố hay không.

// Input: Một số nguyên, ví dụ: 7.

// Output: true nếu số đó là số nguyên tố, ngược lại false, ví dụ: true cho số 7 và false cho số 4.

const isPrime = (number) => {
  let flag = true;
  if (number === 2) return (flag = true);
  if (number !== 2 && number % 2 === 0) {
    return (flag = false);
  }

  for (let i = number - 1; i > 1; i--) {
    if (number % i === 0) {
      return (flag = false);
    }
  }
  return flag;
};

const checkPrim = isPrime(25);
console.log(checkPrim);
