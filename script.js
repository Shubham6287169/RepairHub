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

window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);

function adjustLayout() {
    const width = window.innerWidth;
    const logoImg = document.querySelector('.logo img');
    const firstHalf = document.querySelector('.first-half');
    const secondHalf = document.querySelector('.second-half');

    // Adjust card layout for smaller screens
    if (width <= 768) {
        
        // Reduce logo size on smaller screens
        logoImg.style.width = '40px';
        logoImg.style.height = '40px';

        // Hide second half (image) on small screens
        secondHalf.style.display = 'none';
        firstHalf.style.width = '100%';

    } else {
       
        // Reset logo size for larger screens
        logoImg.style.width = '55px';
        logoImg.style.height = '55px';

        // Show second half on larger screens
        secondHalf.style.display = 'block';
        firstHalf.style.width = '75%';
    }
}

// Function to toggle the mobile menu on smaller screens
function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}

// Add event listener to the hamburger menu button for small screens
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);

// faq -section

const accordians = document.querySelectorAll('.accordian');
 
accordians.forEach(accordian =>{
    const icon =accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');
    
    accordian.addEventListener('click',()=>{
     
        if(icon.classList.contains('rotate')){

            icon.classList.remove('rotate');
            answer.style.maxHeight = null;

        }else{
            icon.classList.add('rotate');
            answer.style.maxHeight = answer.scrollHeight +"px";
        }
    })
})


