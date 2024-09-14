/*let typed = new Typed(".text-small",{
strings:["WELCOME TO  RepairHUB.","WE WILL SERVE YOU BETTER SERVICE."],
typeSpeed:150,
backSpeed:150,
looped :true
})*/
let p = document.querySelector(".text-small");
const text = "We will serve you better services ever.";

function typewriterEffect(element, text, i = 0) {
    
    if (i === 0) {
        element.textContent =''; 
    }
    
    
    element.textContent += text[i];
    

    if (i === text.length - 1) {
        return;
    }
    

    setTimeout(() => {
        typewriterEffect(element, text, i + 1);
    }, 50); 
}

typewriterEffect(p, text);
