// Bài tập 3: Tính tổng các phần tử trong mảng
// Đề bài: Viết hàm sumArray để tính tổng các phần tử trong một mảng số nguyên.

// Input: Một mảng số nguyên, ví dụ: [1, 2, 3, 4, 5].

// Output: Tổng các phần tử trong mảng, ví dụ: 15.

const array = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += arr[i];
  }
  return sum;
};

const sumArr = sumArray(array);
console.log(sumArr);
