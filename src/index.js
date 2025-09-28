import "./styles.css";
import { homeDiv } from "./home.js";

const homeTab = document.querySelector("#home");
const menuTab = document.querySelector("#menu");
const aboutTab = document.querySelector("#about");
const contentTab = document.querySelector("#content");

homeTab.addEventListener("click", ()=> {
    const child = homeDiv();
    contentTab.append(child);
})