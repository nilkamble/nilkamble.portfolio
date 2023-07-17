function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

 const body = document.querySelector('body'),
            toggle = document.querySelector('.darkmode');

            toggle.addEventListener("click" ,()=>{
                body.classList.toggle("dark-mode")
            });

