// Bài tập 4: Tìm giá trị lớn nhất trong mảng
// Đề bài: Viết hàm findMax để tìm giá trị lớn nhất trong một mảng số nguyên.

// Input: Một mảng số nguyên, ví dụ: [1, 2, 3, 4, 5].

// Output: Giá trị lớn nhất trong mảng, ví dụ: 5.

const arr = [1, 2, 33, 4, 5];

const findMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
};

const findNumberMax = findMax(arr);

console.log(findNumberMax);
