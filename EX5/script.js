var count = 1;

function addfunction() {
	var btn = document.createElement("button");
	btn.innerHTML = `CLICK ME (${count})`;
	btn.id = "btn_" + count++;
	btn.className = "btn btn-outline-danger";
	document.body.appendChild(btn);
}

function delfunction() {
	var btn = document.getElementById("btn_" + --count);
	if (btn) {
		document.body.removeChild(btn);
	}
}
