import { setList, getLists, getStores } from "./database.js";
import { ListItems } from "./ListItems.js";

export const Lists = () => {
  let lists = getLists();
  let stores = getStores();
  let html = "<div id='store-lists'>";

  for (let list of lists) {
    for (let store of stores) {
      if (list.storeId === store.id) {
        html += `<button type="button" class="collapsible">${store.name}: ${list.created}</button>`;
        html += `<div class="content">${ListItems(list.id)}</div>`;
      }
    }
  }
  html += "</div>";
  return html;
};

document.addEventListener("click", (event) => {
  if (event.target.name === "submit") {
    setList();
  }
});


export const collapsibleAssignments = () => {
  let coll = document.getElementsByClassName("collapsible");
  for (let item of coll) {
    item.addEventListener("click", function () {
      console.log("made it");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
}