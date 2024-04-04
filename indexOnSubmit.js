const form = document.getElementById("myForm")
form.onsubmit = () => {
    const nameInput = document.getElementById("name");
    if (nameInput.value === '') {
        alert("You need to fill in something...");
    }
};