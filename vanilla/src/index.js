import init, * as w from "/pkg/vanilla.js"
await init();
w.set_panic_hook();
console.log("initiated;");

let i = 1;

const Btn = document.getElementById("Btn");
Btn.addEventListener("click", (e)=>{
  i = w.add_number(i, i);
  Btn.innerText = i;
});