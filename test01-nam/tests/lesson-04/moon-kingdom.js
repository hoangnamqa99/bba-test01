
function createCharacters() {
    // 1. Khai báo mảng các object characters
    const characters = [
        { name: "Mario", level: 10, health: 400 },
        { name: "Luigi", level: 8, health: 300 },
        { name: "Peach", level: 12, health: 500 },
        { name: "Yoshi", level: 9, health: 350 }
    ];

    // 2. Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp
    const charactersPowerUp = characters.map(char => {
        return {
            name: char.name.toUpperCase(), // Viết hoa tên
            level: char.level * 2,          // X2 level
            health: char.health * 3         // X3 health
        };
    });

    // 3. Sử dụng hàm filter để lọc ra health > 1000
    const possibleWinners = charactersPowerUp.filter(char => char.health > 1000);

    // In kết quả ra để kiểm tra
    console.log("Characters Power Up:", charactersPowerUp);
    console.log("Possible Winners:", possibleWinners);
}

// Chạy hàm
createCharacters();