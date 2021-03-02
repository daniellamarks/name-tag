const nameInput = document.getElementById("name-input");
const pronounInput = document.getElementById("pronoun-input");

const nameDisplay = document.getElementById("name-display");
const pronounDisplay = document.getElementById("pronoun-display");

const changeAllButton = document.getElementById("change-all-button");

changeAllButton.addEventListener("click", () => {
    nameDisplay.textContent = nameInput.value;
    pronounDisplay.textContent = pronounInput.value;
    console.log("value is", pronounInput.value, nameInput.value);
    nameInput.value = "";
    pronounInput.value = "";
});

//const pronounChangeButton = document.getElementById("pronoun-change-button");
//const changeButton = document.getElementById("name-change-button");
/*changeButton.addEventListener("click", () => {
    nameDisplay.textContent = nameInput.value;
    console.log("value is", nameInput.value);
    nameInput.value = "";
});

pronounChangeButton.addEventListener("click", () => {
    pronounDisplay.textContent = pronounInput.value;
    console.log("value is", pronounInput.value);
    pronounInput.value = "";
});
*/