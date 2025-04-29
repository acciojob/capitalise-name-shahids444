//your JS code here. If required.
function Uppercase(params) {
	let inputfield = document.getElementById("fname")
	inputfield.value =  inputfield.value.toUpperCase();
}
document.getElementById("fname").addEventListener("blur",Uppercase)