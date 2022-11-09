// სერჩის ღილაკი
let input = document.querySelector(".searchinput")
console.log(input)
let icon = document.querySelector(".icon")

icon.addEventListener("click", function(){
    input.classList.toggle("myStyle")
})


//სქროლის დროს ანიმაცია ქარდებზე
let box = document.querySelector(".cardanimationsection")
let cardBox1 = document.querySelector(".animationcard1")
console.log(cardBox1)
let cardBox2 = document.querySelector(".animationcard2")
let cardBox3 = document.querySelector(".animationcard3")
let cardBox4 = document.querySelector(".animationcard4")

window.addEventListener("scroll", function(){
    if(scrollY>200){
        cardBox1.style.opacity="1"
        cardBox2.style.opacity="1"
        cardBox3.style.opacity="1"
        cardBox4.style.opacity="1"
        
    }else if(scrollY<200){
        cardBox1.style.opacity="0"
        cardBox2.style.opacity="0"
        cardBox3.style.opacity="0"
        cardBox4.style.opacity="0"
    }
    
})


let skiBox = document.querySelector(".sectionski")
let skiH = document.querySelector(".skiH")
let skiP = document.querySelector(".skiP")

let ski1 = document.querySelector(".skicard1")
let ski2 = document.querySelector(".skicard2")
let ski3 = document.querySelector(".skicard3")
let ski4 = document.querySelector(".skicard4")

ski1.addEventListener("click", function(){
    skiBox.style.backgroundImage = "url(ski1.jpg)"
    skiH.innerHTML = "Ski School"
})
ski2.addEventListener("click", function(){
    skiBox.style.backgroundImage = "url(ski2.jpg)"
    skiH.innerHTML = "Sled"
})
ski3.addEventListener("click", function(){
    skiBox.style.backgroundImage = "url(ski3.jpg)"
    skiH.innerHTML = " Snow Biking"
})
ski4.addEventListener("click", function(){
    skiBox.style.backgroundImage = "url(ski4.webp)"
    skiH.innerHTML = "Marquee"
})





