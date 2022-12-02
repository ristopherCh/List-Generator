import { Stores } from "./Stores.js";
import { Categories } from "./Categories.js";
import { getSelectedStoreId, getLists } from "./database.js";
import { Lists } from "./Lists.js";
import { ListItems } from "./ListItems.js";

export const App = () => {
  let html = `
  <div class="stores-box">${Stores()}</div>
  <div id="categories-container">
      ${Categories()}
  </div>
  <div class="submit-box">
    <button id="submit" class="submit" type="button" name="submit">Make List</button>
  </div>
  <div class="lists">
    <h2>Lists</h2>
    ${Lists()}
  </div>
  `;

  return html;
};

const mainContainer = document.getElementById("container");

const renderApp = () => {
  mainContainer.innerHTML = App();
};

renderApp();

document.addEventListener("stateChanged", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  renderApp();
});
