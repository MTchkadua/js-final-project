// სერჩის ღილაკი
let input = document.querySelector(".searchinput")
console.log(input)
let icon = document.querySelector(".icon")

icon.addEventListener("click", function(){
    input.classList.toggle("myStyle")
})