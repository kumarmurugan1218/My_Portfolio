document.addEventListener("DOMContentLoaded", () => {
    const link=document.querySelector("ul");
    const button=document.querySelector(".burger");
    const body=document.querySelector("body");
    button.addEventListener("click",()=>{
        link.classList.toggle("active");

    })
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

});
