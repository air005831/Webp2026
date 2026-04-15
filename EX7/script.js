const container = document.getElementById("container");
let errorCount = 0; // 新增：紀錄連續錯誤次數

// 初始化字元
add_new_chars();

window.addEventListener("keyup", function (e) {
	const text = container.textContent;

	// 1. 檢查正確輸入
	if (text.length > 0 && text[0] === e.key) {
		container.textContent = text.slice(1);
		errorCount = 0; // 輸入正確，重設錯誤計數
	}
	// 2. 檢查錯誤輸入
	else {
		errorCount++; // 增加錯誤次數
	}

	// 3. 判斷是否增加新字元
	// 條件：連續錯 3 次 OR 容器已經空了
	if (errorCount >= 3 || container.textContent.length === 0) {
		add_new_chars();
		errorCount = 0; // 增加字元後重設計數
	}
});

function add_new_chars() {
	const count = Math.random() < 0.5 ? 1 : 3;
	for (let i = 0; i < count; i++) {
		container.textContent += random_char();
	}
}

function random_char() {
	const chars = "abcdefghijklmnopqrstuvwxyz";
	const index = Math.floor(Math.random() * chars.length);
	return chars[index];
}
