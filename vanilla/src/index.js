import init, * as wasm from "/wpkg/pkg/wpkg.js"
await init();

console.log("initiated;");

let i = 1;

const Btn = document.getElementById("Btn");
Btn.addEventListener("click", (e)=>{
  i = wasm.add_number(i, i);
  Btn.innerText = i;
});