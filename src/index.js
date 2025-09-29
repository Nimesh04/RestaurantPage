import "./styles.css";
import { createHome } from "./home.js";
import { createAbout } from "./about.js";
import { createMenu } from "./menu.js";

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const aboutTab = document.querySelector("#about");
const contentTab = document.querySelector("#content");
let hasContent = false;



homeTab.addEventListener("click", ()=> {
    contentTab.innerHTML = ``;
    const child = createHome();
    contentTab.append(child);
})

menuTab.addEventListener("click", ()=>{
    contentTab.innerHTML = ``;
    const child = createMenu();
    contentTab.append(child);
})

aboutTab.addEventListener("click", ()=>{
    contentTab.innerHTML = ``;
    const child = createAbout();
    contentTab.append(child);   
})