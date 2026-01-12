// Khai báo biến
let playerName = "Mario";
let currentLives = 3;

// Hằng số coins theo level
const level1 = 25;
const level2 = 30;
const level3 = 45;

// Tính giá trị trung bình coin 3 level
let averageCoins = (level1 + level2 + level3) / 3;
console.log("Giá trị trung bình coin:", averageCoins);

// In ra coin dư khi chia cho 3
let remainder = averageCoins % 3;
console.log("Số coin dư khi chia 3:", remainder);
