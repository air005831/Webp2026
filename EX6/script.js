const container = document.getElementById("container");

// 初始化一些字元
add_new_chars();

window.addEventListener("keyup", function (e) {
	console.log(e.key);

	// 檢查第一個字元是否和 e.key 一樣
	if (container.textContent.length > 0 && container.textContent[0] === e.key) {
		// 一樣的話把第一個字元消除
		container.textContent = container.textContent.slice(1);
	}

	// 每次按鍵後再補新的字元
	add_new_chars();
});

function add_new_chars() {
	// 隨機決定要加 1 或 3 個字元
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
