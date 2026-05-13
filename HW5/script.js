var openUrl =
	"https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
var xhr = new XMLHttpRequest();
var dataset = [];
var currentPage = 1;
var rowsPerPage = 10;
var filteredData = [];

xhr.open("GET", openUrl, true);
xhr.send();
xhr.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		dataset = JSON.parse(this.responseText);
		filteredData = dataset; // 初始顯示全部
		renderTable();
	}
};

function renderTable() {
	var myTable = document.getElementById("csie");
	// 清除舊資料（保留表頭）
	myTable.innerHTML = "<tr><th>名稱</th><th>地點</th><th>票價</th></tr>";

	// 計算分頁範圍
	var start = (currentPage - 1) * rowsPerPage;
	var end = start + rowsPerPage;
	var pageData = filteredData.slice(start, end);

	// 插入資料
	pageData.forEach(function (data) {
		var row = myTable.insertRow(-1);
		row.insertCell(0).innerHTML = data["title"];
		row.insertCell(1).innerHTML = data["showInfo"][0]["location"];
		row.insertCell(2).innerHTML = data["showInfo"][0]["price"];
	});

	// 更新分頁資訊
	var totalPages = Math.ceil(filteredData.length / rowsPerPage);
	document.getElementById("pageInfo").innerHTML =
		"第 " + currentPage + " 頁 / 共 " + totalPages + " 頁";
}

function prevPage() {
	if (currentPage > 1) {
		currentPage--;
		renderTable();
	}
}

function nextPage() {
	var totalPages = Math.ceil(filteredData.length / rowsPerPage);
	if (currentPage < totalPages) {
		currentPage++;
		renderTable();
	}
}

function searchData() {
	var keyword = document.getElementById("searchBox").value.trim();
	if (keyword === "") {
		filteredData = dataset; // 沒輸入就顯示全部
	} else {
		filteredData = dataset.filter(function (data) {
			return data["title"].includes(keyword);
		});
	}
	currentPage = 1; // 搜尋後回到第一頁
	renderTable();
}
