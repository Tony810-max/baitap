// Bài tập 5: Đảo ngược chuỗi
// Đề bài: Viết hàm reverseString để đảo ngược một chuỗi ký tự.

// Input: Một chuỗi ký tự, ví dụ: "hello".

// Output: Chuỗi ký tự đã được đảo ngược, ví dụ: "olleh".

const letter = "hello";

const reverseString = (arrLetter) => {
  const arrString = [];
  for (let i = arrLetter.length - 1; i >= 0; i--) {
    arrString.push(arrLetter[i]);
  }
  return arrString.join("");
};

const reverString = reverseString(letter);
console.log(reverString);
