function addItem() {
  const itemInput = document.getElementById("itemInput");
  const itemList = document.getElementById("itemList");

  if (itemInput.value.trim() === "") {
    alert("Please enter an item.");
    return;
  }

  const newItem = document.createElement("li");
  newItem.textContent = itemInput.value;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  newItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    itemList.removeChild(newItem);
  });

  itemList.appendChild(newItem);

  itemInput.value = "";
}

function setupEventListeners() {
  const addButton = document.getElementById("addButton");

  addButton.addEventListener("click", addItem);

  document.getElementById("itemInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  });
}

function init() {
  setupEventListeners();
}

document.addEventListener("DOMContentLoaded", init);
