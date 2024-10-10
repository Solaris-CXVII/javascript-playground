let notes = [];

function addNote() {
  const noteTitle = document.getElementById("noteTitle").value.trim();
  const noteContent = document.getElementById("noteContent").value.trim();

  if (!noteTitle || !noteContent) {
    alert("Please enter both title and content.");
    return;
  }

  const newNote = {
    title: noteTitle,
    content: noteContent,
    id: Date.now(),
  };

  notes.push(newNote);
  addNoteToDOM(newNote);
  clearForm();
}

function clearForm() {
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteContent").value = "";
}

function addNoteToDOM(note) {
  const noteList = document.getElementById("noteList");

  const noteItem = document.createElement("li");
  noteItem.setAttribute("data-id", note.id);

  const noteText = document.createElement("span");
  noteText.textContent = `${noteTitle}: ${noteContent}`;
  noteItem.appendChild(noteText);

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit-btn");
  editButton.addEventListener("click", () => deleteNoteHandler(note.id));

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => deleteNoteHandler(note.id));

  noteItem.appendChild(editButton);
  noteItem.appendChild(deleteButton);
  noteList.appendChild(noteItem);
}

function editNoteHandler(noteId) {
  const noteToEdit = notes.find((note) => note.id === noteId);
  if (!noteToEdit) return;

  document.getElementById("noteTitle").value = noteToEdit.title;
  document.getElementById("noteContent").value = noteToEdit.content;

  const addNoteBtn = document.getElementById("addNoteBtn");
  addNoteBtn.textContent = "Save";
  addNoteBtn.removeEventListener("click", addNote);
}

function saveNoteHandler(noteId) {
  const noteTitle = document.getElementById("noteTitle").value.trim();
  const noteContent = document.getElementById("noteContent").value.trim();

  if (!noteTitle || !noteContent) {
    alert("PLease enter both title and content.");
    return;
  }

  const noteIndex = notes.findIndex((note) => note.id === noteId);
  notes[noteIndex].title = noteTitle;
  notes[noteIndex].title = noteContent;

  const noteListItem = document.querySelector(`li[data-id="${noteId}"]`);
  noteListItem.querySelector("span").textContent =
    `${noteTitle}: ${noteContent}`;

  const addNoteBtn = document.getElementById("addNoteBtn");
  addNoteBtn.textContent = "Add Note";
  addNoteBtn.removeEventListener("click", () => saveNoteHandler(noteId));
  addNoteBtn.addEventListener("click", addNote);

  clearForm();
}

function deleteNoteHandler(noteId) {
  notes = notes.filter((note) => note.id !== noteId);
  const noteItem = document.querySelector(`li[data-id="${noteId}"]`);
  noteItem.remove();
}

function init() {
  document.getElementById("addNoteBtn").addEventListener("click", addNote);

  document.getElementById("noteTitle").addEventListener("keydown", (e) => {
    if (e.key === "Enter") addNote();
  });
  document.getElementById("noteContent").addEventListener("keydown", (e) => {
    if (e.key === "Enter") addNote();
  });
}

document.addEventListener("DOMContentLoaded", init);
