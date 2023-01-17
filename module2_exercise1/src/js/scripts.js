const removeButtons = document.querySelectorAll(".remove_button");
const createButton = document.querySelector(".create");

removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", (e) => {
        removeButton.remove();
    })
})

createButton.addEventListener("click", addButton);

function addButton(e) {
    const addNewButton = document.createElement("button.remove_button");
    // const addNewButtonText = document.createTextNode("Remove Me!");
    document.querySelector("button").append(addNewButton);
    
    addNewButton.insertAdjacentHTML("beforebegin", " <button class=\"remove_button\">Remove Me!</button>");
}


