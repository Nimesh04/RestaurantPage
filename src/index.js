import "./styles.css";
import { createHome } from "./home.js";
import { createAbout } from "./about.js";
import { createMenu } from "./menu.js";

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const aboutTab = document.querySelector("#about");
const contentTab = document.querySelector("#content");
// let hasContent = false;

const childContent = createHome();
contentTab.append(childContent);

function menu(){
    contentTab.innerHTML = ``;
    const child = createMenu();
    contentTab.append(child);
}
const menuBtn = document.querySelector(".cta");

homeTab.addEventListener("click", ()=> {
    contentTab.innerHTML = ``;
    const child = createHome();
    contentTab.append(child);
    menuBtn.addEventListener("click", menu);
})




menuTab.addEventListener("click", menu);


aboutTab.addEventListener("click", ()=>{
    contentTab.innerHTML = ``;
    const child = createAbout();
    contentTab.append(child);   
})