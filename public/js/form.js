const form = document.querySelector("#email-form");
const input = document.querySelector("#email-input");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const XHR = new XMLHttpRequest();
	XHR.open("POST", "/addEmail");
	XHR.setRequestHeader("Content-Type", "application/json");
	XHR.send(JSON.stringify({ email: input.value }));

	input.value = "";
});
