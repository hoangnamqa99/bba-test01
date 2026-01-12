function findPairsDivisibleBy17() {
    let count = 0;
    // Vòng lặp i chạy từ 1 đến 100
    for (let i = 1; i <= 100; i++) {
        // Vòng lặp j chạy từ i + 1 để không trùng lặp cặp số
        for (let j = i + 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                console.log(`(${i}, ${j}) = ${i + j}`);
                count++;
            }
        }
    }
    console.log(`\nTổng cộng: ${count} cặp`);
}

// Chạy hàm kiểm tra
findPairsDivisibleBy17();