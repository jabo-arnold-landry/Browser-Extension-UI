export const data = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];
let darkMode = localStorage.getItem("darkmode");
console.log(darkMode);
const switchingModesIcon = document.querySelector(".theme-icon");
const image = switchingModesIcon.querySelector("img");
if (darkMode === "dark") {
  document.body.classList.add("dark");
  image.setAttribute("src", "./assets/images//icon-sun.svg");
}

function darkModeSwitching() {
  //checking if the body has the dark mode class
  if (darkMode !== "dark") {
    document.body.classList.add("dark");
    //switchingModesIcon.src = "./assets/images//icon-sun.svg";
    //setting the dark mode to local storage
    localStorage.setItem("darkmode", "dark");
  } else {
    document.body.classList.remove("dark");
    //switchingModesIcon.src = "./images/moon.png";
    //removing the dark mode from local storage
    localStorage.setItem("darkmode", "light");
  }
}
export function switchingModes() {
  image.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("darkmode");
    //darkModeSwitching();
    if (e.target.tagName === "IMG" && darkMode === "light") {
      darkModeSwitching();

      e.target.src = "./assets/images//icon-sun.svg";
    } else {
      darkModeSwitching();
      e.target.src = "./assets//images/icon-moon.svg";
    }
  });
}
