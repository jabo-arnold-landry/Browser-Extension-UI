import { data } from "./switchingTabs.js";

const extensionsArea = document.querySelector(".extension-panel");
const filters = document.querySelector(".filters");
//state variable
let currentState = "all";
const toggleButton = document.querySelectorAll(".toggle");
function displayData(arr) {
  extensionsArea.innerHTML = "";
  if (arr.length === 0) {
    extensionsArea.innerHTML = `<p class="no-result">No extension found </p>`;
    return;
  }
  arr.forEach((element) => {
    const { logo, name, description, isActive } = element;

    extensionsArea.innerHTML += `<div class="card" dat-name="${name}">
            <div class="images-text">
            <img src=${logo} alt="${name}" />
            <div class="text-section">
            <strong>${name}</strong>
            <p>${description}</p>
            </div>
            </div>
            <div class="btns">
              <button class= "remove" data-name="${name}">remove</button>
              <div tabIndex=0 role='button' class="${
                isActive === true ? "toggle-true " : "toggle-false"
              }" data-name="${name}">
              <div class="circle"></div>
              </div>
            </div>
          </div>`;
  });
}
displayData(data);

function displayActiveOrinActive(status) {
  const filteredData = data.filter((element) => element.isActive === status);
  displayData(filteredData);
}
function renderCurrentView() {
  activeFilter(currentState);

  if (currentState === "all") {
    displayData(data);
  } else if (currentState === "active") {
    displayActiveOrinActive(true);
  } else if (currentState === "inactive") {
    displayActiveOrinActive(false);
  }
}
const btns = filters.querySelectorAll("button");
function activeFilter(text) {
  const clickedFilter = document.getElementById(text);
  const btns = filters.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.classList.remove("toggle");
  });
  clickedFilter.classList.add("toggle");
}
filters.addEventListener("click", (e) => {
  let filterState = e.target.id;
  if (e.target.tagName === "BUTTON") {
    if (["all", "active", "inactive"].includes(filterState)) {
      currentState = filterState;
      renderCurrentView();
    }
  }
});
extensionsArea.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("remove")) {
    const elementToRemove = target.dataset.name;
    const elementIndex = data.findIndex(
      (item) => item.name === elementToRemove
    );
    if (elementIndex > -1) {
      data.splice(elementIndex, 1);
      renderCurrentView();
    } else {
      console.error("Element not found in data array");
    }
  }
  const toggledButton =
    target.closest(".toggle-false") || target.closest(".toggle-true");
  if (toggledButton) {
    const nameOfTheElement = toggledButton.dataset.name;
    const elementIndex = data.find(
      (element) => element.name === nameOfTheElement
    );
    if (elementIndex) {
      elementIndex.isActive = !elementIndex.isActive;
      renderCurrentView();
    }
  }
});

import { switchingModes } from "./switchingTabs.js";
switchingModes();
