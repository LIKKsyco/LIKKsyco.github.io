var button = document.getElementById("more");
var note = document.getElementById("check");
var year = document.getElementById("year");

year.textContent = String(new Date().getFullYear());

button.onclick = function () {
  if (note.hidden) {
    note.hidden = false;
    button.textContent = "Hide what I check";
  } else {
    note.hidden = true;
    button.textContent = "Show what I check";
  }
};
