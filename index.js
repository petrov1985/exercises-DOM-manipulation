let msg = document.getElementById("name");
let inputText = "";
msg.addEventListener("keyup", (event) => {
  inputText += event.key;
  console.log(inputText);
});