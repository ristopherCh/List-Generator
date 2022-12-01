import { setList, getLists, getStores } from "./database.js";

export const Lists = () => {
  let lists = getLists();
  let stores = getStores();
  let html = "<ul>";

  for (let list of lists) {
    for (let store of stores) {
      if (list.storeId === store.id) {
        html += `<li>${store.name}: ${list.created}</li>`;
      }
    }
  }
  html += "</ul>";
  return html;
};

document.addEventListener("click", (event) => {
  // console.log(event.target.name)
  if (event.target.name === "submit") {
    setList();
  }
});
