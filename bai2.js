// Bài tập 2: Tìm kiếm tuyến tính
// Đề bài: Viết hàm linearSearch để tìm kiếm một phần tử trong mảng bằng thuật toán
// tìm kiếm tuyến tính (Linear Search).

// Input: Một mảng số nguyên và một số nguyên cần tìm, ví dụ: [2, 3, 4, 10, 40] và 10.

// Output: Chỉ số của phần tử trong mảng nếu tìm thấy, ví dụ: 3. Nếu không tìm thấy, trả về -1.

const arr = [2, 3, 4, 10, 40];
const linearSearch = (arr, numSearch) => {
  for (let i = 0; i < arr.length + 1; i++) {
    if (arr[i] === numSearch) {
      return i;
    }
  }
  return -1;
};

const numberSearch = linearSearch(arr, 10);
console.log(numberSearch);
