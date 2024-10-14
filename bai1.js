// Bài tập 1: Sắp xếp mảng số nguyên
// Đề bài: Viết hàm bubbleSort để sắp xếp một mảng số nguyên theo thứ tự tăng dần bằng thuật toán sắp xếp nổi bọt
// (Bubble Sort).

// Input: Một mảng số nguyên, ví dụ: [64, 34, 25, 12, 22, 11, 90].

// Output: Mảng số nguyên đã được sắp xếp theo thứ tự tăng dần, ví dụ: [11, 12, 22, 25, 34, 64, 90].

const array = [64, 34, 25, 12, 22, 11, 90];
// const sortArray = [];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const sortArray = bubbleSort(array);
console.log(sortArray);
