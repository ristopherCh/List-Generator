import { setList, getLists, getStores } from "./database.js";
import { ListItems } from "./ListItems.js";

export const Lists = () => {
  let lists = getLists();
  let stores = getStores();
  let html = "<ul>";

  for (let list of lists) {
    for (let store of stores) {
      if (list.storeId === store.id) {
        html += `<li>${store.name}: ${list.created}</li>`;
        html += `${ListItems(list.id)}`
      }
    }
  }
  html += "</ul>";
  return html;
};

document.addEventListener("click", (event) => {
  if (event.target.name === "submit") {
    setList();
  }
});
