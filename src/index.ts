import "./index.scss";
import  $  from "./plugins/index";

console.log("hello0", $);

const modal = $.modal();



const $opener = document.querySelector("#openModal");

$opener?.addEventListener("click", () => {
    modal.open();
})
