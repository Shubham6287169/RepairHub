/*let typed = new Typed(".text-small",{
strings:["WELCOME TO  RepairHUB.","WE WILL SERVE YOU BETTER SERVICE."],
typeSpeed:150,
backSpeed:150,
looped :true
})*/
let p = document.querySelector(".text-small");


const text = [
    "Welcome to repairHUB!",
    "We will serve you better services ever.",
    "Experience our professional repair services."
    ];

    let textIndx=0;


function typewriterEffect(element, text, i = 0) {
     
    const currentText = text[textIndx];
    if (i === 0) {
        element.textContent =''; 
    }
    
    
    element.textContent += currentText[i];
    

    if (i === currentText.length - 1) {
       //Restart the animation..
    
        setTimeout(() => {
            textIndx=(textIndx + 1) % text.length;
            typewriterEffect(element, text, 0);
        }, 1500)

        return;
    }
    
    setTimeout(() => {
        typewriterEffect(element, text, i + 1);
    }, 70)
    
}

typewriterEffect(p, text);

