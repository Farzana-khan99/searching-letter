let input = document.getElementById("inp")
let para = document.querySelector("#para");
console.log(para);

function search() {
  // let content = document.getElementById("inp").innerHTML = input.value/
  let input = document.getElementById("inp").value;
  let word = document.getElementById("word");
  word.innerHTML = input;
  if (input !== "") {
    let regex = new RegExp(input, "gi");
    console.log(regex);
    para.innerHTML = para.textContent.replace(regex, "<mark>$&</mark>");
  }
 
}
